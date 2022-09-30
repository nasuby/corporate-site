<!DOCTYPE html>
<html lang="ja">

<?php get_header(); ?>

<body>
  <?php get_template_part('template-parts/navigation'); ?>
  <main>
    <section class="kvContact">
      <div class="kvContact__bgImage">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/top-contact.png" alt="">
      </div>
      <div class="kvContact__text">
        <h1>CONTACT</h1>
      </div>
    </section>

    <?php
    $page_name = 'CONTACT';
    get_template_part('template-parts/breadcrumb', null, $page_name);
    ?>

    <section class="contactDetail">
      <div class="contactDetail__detail">
        <h1>お問い合わせ</h1>

        <!-- TODO: contact form 7 -->
        <?php while (have_posts()):
          the_post(); ?>
        <?php the_content(); ?>
        <?php
        endwhile; ?>
      </div>
    </section>
  </main>
  <?php get_footer(); ?>
</body>
</html>