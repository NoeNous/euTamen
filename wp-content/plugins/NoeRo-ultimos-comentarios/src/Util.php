<?php

namespace Barn2\Plugin\Better_Recent_Comments;

/**
 * This class provides utility functions for the Better Recent Comments plugin.
 *
 * @package   Barn2\better-recent-comments
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */
class Util {

	public static function default_shortcode_args() {
		return [
			'number'      => 150,
			'format'      => self::get_comment_format(),
			'date_format' => 'M j, H:i',
			'avatar_size' => 50,
			'post_status' => 'publish',
			'post_type'   => 'any',
			'excerpts'    => false
		];
	}

	public static function get_comment_format( $date = false, $comment = true, $post_link = true, $avatar = false ) {
		$format = '';

		if ( $avatar ) {
			$format .= '{avatar} ';
		}
		if ( $post_link ) {
			/* translators: comments widget: 1: comment author, 2: post link */
			$format .= sprintf( _x( '%1$s', 'recent comment', 'better-recent-comments' ), '{post}' );
		} else {
			$format .= '{author}';
		}
		if ( $comment ) {
			$format .= '{comment}';
		}
		if ( $date ) {
			$format .= ' {date}';
		}

		return apply_filters( 'better_recent_comments_comment_format', $format );
	}

	public static function get_recent_comments( $args ) {
		$defaults = self::default_shortcode_args();
		$args     = wp_parse_args( $args, $defaults );

		// Sanitize post status used to retrieve comments.
		$post_status = array_filter( array_map( 'sanitize_key', explode( ',', $args['post_status'] ) ) );
		$post_type   = sanitize_key( $args['post_type'] );

		$comment_args = [
			'number'      => absint( filter_var( $args['number'], FILTER_VALIDATE_INT ) ),
			'status'      => 'approve',
			'post_status' => $post_status,
			'post_type'   => $post_type,
			'type'        => apply_filters( 'better_recent_comments_comment_type', 'comment' )
		];

		if ( class_exists( '\SitePress' ) ) {
			// WPML active - get all posts of the selected post type in the current language.
			$posts_current_lang = get_posts(
				apply_filters( 'better_recent_comments_post_args_wpml', [
					'posts_per_page'   => 2000,
					'post_type'        => $post_type,
					'post_status'      => $post_status,
					'fields'           => 'ids',
					'suppress_filters' => false // Ensure WPML filters run on this query
				] )
			);

			if ( $posts_current_lang ) {
				$comment_args['post__in'] = $posts_current_lang;
			}
		}

		// Get recent comments limited to post IDs above.
		$comments = get_comments( apply_filters( 'better_recent_comments_comment_args', $comment_args ) );

		$output              = '';
		$comment_item_style  = '';
		$comments_list_class = 'recent-comments-list';

		// Use .recentcomments class on li's to match WP_Recent_Comments widget
		$comment_li_fmt = apply_filters( 'better_recent_comments_li_format', '<li class="recentcomments recent-comment"><div class="comment-wrap"%s>%s</div></li>' );

		if ( is_array( $comments ) && $comments ) {
			// Prime cache for associated posts. (Prime post term cache if we need it for permalinks.)
			$post_ids = array_unique( wp_list_pluck( $comments, 'comment_post_ID' ) );
			_prime_post_caches( $post_ids, strpos( get_option( 'permalink_structure' ), '%category%' ), false );

			$format      = empty( $args['format'] ) ? self::get_comment_format() : $args['format'];
			$date_format = empty( $args['date_format'] ) ? $defaults['date_format'] : $args['date_format'];

			$link_from   = self::comment_link_from( $format );
			$excerpts    = isset( $args['excerpts'] ) ? filter_var( $args['excerpts'], FILTER_VALIDATE_BOOLEAN ) : $defaults['excerpts'];
			$avatar_size = empty( $args['avatar_size'] ) ? false : filter_var( $args['avatar_size'], FILTER_VALIDATE_INT );
			$link_fmt    = apply_filters( 'better_recent_comments_comment_link_format', '<a href="%s">%s</a>' );

			if ( ! $avatar_size ) {
				$avatar_size = $defaults['avatar_size'];
			}

			if ( false !== strpos( $format, '{avatar}' ) ) {
				$comments_list_class .= ' with-avatars';

				if ( apply_filters( 'better_recent_comments_enable_avatar_inline_css', true ) ) {
					$comment_item_style = sprintf(
						' style="padding-left:%1$upx; min-height:%2$upx;"',
						round( $avatar_size + ( $avatar_size / 4 ) ),
						$avatar_size + 4
					);
				}
			}

			foreach ( (array) $comments as $comment ) {
				$avatar = apply_filters( 'better_recent_comments_avatar', get_avatar( $comment, $avatar_size ), $comment );
				$author = apply_filters( 'better_recent_comments_comment_author_link', get_comment_author_link( $comment->comment_ID ), $comment );
				$date   = apply_filters( 'better_recent_comments_comment_date', get_comment_date( $date_format, $comment->comment_ID ), $comment, $date_format );
				$post   = apply_filters( 'better_recent_comments_post_title', get_the_title( $comment->comment_post_ID ), $comment );

				if ( $excerpts ) {
					$comment_text = get_comment_excerpt( $comment->comment_ID );
				} else {
					if ( apply_filters( 'better_recent_comments_strip_formatting', true ) ) {
						$comment_text = strip_tags( str_replace( [ "\n", "\r" ], ' ', $comment->comment_content ) );
					} else {
						//todo: Remove this option and always strip formatting?
						$comment_text = wpautop( $comment->comment_content );
					}
				}

				$comment_text = apply_filters( 'better_recent_comments_comment_text', $comment_text, $comment );
				$comment_url  = apply_filters( 'better_recent_comments_comment_url', esc_url( get_comment_link( $comment->comment_ID ) ) );

				if ( 'post' === $link_from ) {
					$post = sprintf( $link_fmt, $comment_url, $post );
				} elseif ( 'date' === $link_from ) {
					$date = sprintf( $link_fmt, $comment_url, $date );
				} elseif ( 'comment' === $link_from ) {
					$comment_text = sprintf( $link_fmt, $comment_url, $comment_text );
				}

				$comment_content = apply_filters( 'better_recent_comments_comment_content',
					str_replace(
						[ '{avatar}', '{author}', '{comment}', '{date}', '{post}' ],
						[
							'<span class="comment-avatar">' . $avatar . '</span>',
							'<span class="comment-author-link">' . $author . '</span>',
							'<span class="comment-excerpt">' . $comment_text . '</span>',
							'<span class="comment-date">' . $date . '</span>',
							'<span class="comment-post" style="display:block;">' . $post . '</span>'
						],
						$format
					), $comment );

				$output .= sprintf( $comment_li_fmt, $comment_item_style, $comment_content );
			} // foreach comment
		} else {
			$output = sprintf( $comment_li_fmt, '', __( 'Sen experiencias', 'better-recent-comments' ) );
		} // if comments

		return apply_filters( 'better_recent_comments_list', sprintf( '<ul id="better-recent-comments" class="%s">%s</ul>', $comments_list_class, $output ) );
	}

	private static function comment_link_from( $format ) {
		$link_from = 'post';
		if ( false === strpos( $format, 'post' ) ) {
			$link_from = 'date';
			if ( false === strpos( $format, 'date' ) ) {
				$link_from = 'comment';
			}
		}
		return apply_filters( 'better_recent_comments_link_from', $link_from );
	}

}
