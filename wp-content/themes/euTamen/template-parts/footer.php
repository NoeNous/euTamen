<?php
/**
 * Footer component
 *
 * @package MaterialDesign
 */

$footer_text = get_theme_mod( 'footer_text', '' );
?>

<div class="voltar">
				<!--Para o back-to-top-->
				<?php get_template_part( 'template-parts/back-to-top' ); ?>
			</div>
	<div
		id="colophon"
		class="mdc-layout-grid site-footer__inner"
	>
		<div class="mdc-layout-grid__inner">
			<div class="site-footer__copyright mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
				<p class="site-footer__text mdc-typography--subtitle2 firmaCopyright"><?php echo esc_html( $footer_text ); ?></p>
				<p class="site-footer__text mdc-typography--subtitle2 firmaCopyright">1º Premio no Concurso I de Proxectos Innovadores - Modalidade Igualdade. IES San Clemente, 2021.</p>
			</div>
			<div class="politicas">
				<!--Para os enlaces-->
				<p>
					<a href="http://eutamen.gal/politica-de-cookies/" class="enlacePoliticas">Política de Cookies</a>
				</p>
				<p>
					<a href="http://eutamen.gal/aviso-legal-e-politica-de-privacidade/" class="enlacePoliticas">Aviso legal</a>
				</p>
			</div>

			
		</div>
	</div><!-- #colophon -->
