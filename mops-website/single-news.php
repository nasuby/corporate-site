<!DOCTYPE html>
<html lang="ja">

<?php get_header(); ?>
  <?php get_template_part('template-parts/navigation'); ?>
  <main>
    <section class="kvNews">
      <div class="kvNews__bgImage">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/news-detail.png" alt="">
      </div>
      <div class="kvNews__text">
        <h1>NEWS</h1>
      </div>
    </section>

    <section class="breadcrumb">
      <ul class="breadcrumb__items">
        <li>
          <a href="/">トップページ</a>
        </li>
        <li>
          <div>></div>
        </li>
        <li>
          <a href="/news">NEWS</a>
        </li>
        <li>
          <div>></div>
        </li>
        <?php while (have_posts()):
          the_post(); ?>
        <li>
          <div><?php the_title(); ?></div>
        </li>
        <?php
        endwhile; ?>
      </ul>
    </section>

    <section class="newsSingle">
      <div class="newsSingle__detail">
        <?php while (have_posts()):
          the_post(); ?>
          <div class="newsSingle__detail--title"><?php the_title(); ?></div>
          <?php the_content(); ?>
        <?php
        endwhile; ?>
        </main>
      </div>
    </section>

<?php get_footer(); ?>
</body>
</html>