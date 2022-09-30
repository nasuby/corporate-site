<!DOCTYPE html>
<html lang="ja">

<?php get_header(); ?>

<body>
  <?php get_template_part('template-parts/navigation'); ?>
  <main>
    <section class="kvNews">
      <div class="kvNews__bgImage">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/top-news.png" alt="">
      </div>
      <div class="kvNews__text">
        <h1>NEWS</h1>
      </div>
    </section>

    <?php
    $page_name = 'NEWS';
    get_template_part('template-parts/breadcrumb', null, $page_name);
    ?>

    <section class="newsDetail">
      <div class="newsDetail__detail">
        <?php
        $args = [
          'post_type' => ['news', 'info', 'post'],
          'orderby' => 'post_date',
          'posts_per_page' => 10,
        ];
        $my_query = new WP_Query($args);
        ?>
      <?php
      if ($my_query->have_posts()): ?>
        <ul>
          <?php while ($my_query->have_posts()):
            $my_query->the_post(); ?>
            <li>
              <a href="<?php the_permalink($post); ?>" class="newsDetail__detail--contents">
                <h3>
                  <?php the_date('Y/m/d'); ?> <?php the_title(); ?>
                </h3>
                <div>
                  <?php the_excerpt(); ?>
                </div>
              </a>
            </li>
          <?php
          endwhile; ?>
        </ul>
      <?php else: ?>
        <p>まだ投稿がありません。</p>
      <?php endif;
      wp_reset_postdata();
      ?>
      </div>
    </section>
  </main>
  <?php get_footer(); ?>
</body>
</html>