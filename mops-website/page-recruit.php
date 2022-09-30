<!DOCTYPE html>
<html lang="ja">

<?php get_header(); ?>

<body>
  <?php get_template_part('template-parts/navigation'); ?>
  <main>
    <section class="kvRecruit">
      <div class="kvRecruit__bgImage">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/top-recruit.jpg" alt="">
      </div>
      <div class="kvRecruit__text">
        <h1>RECRUIT</h1>
      </div>
    </section>

    <?php
    $page_name = 'RECRUIT';
    get_template_part('template-parts/breadcrumb', null, $page_name);
    ?>

    <section class="recruitmentType">
      <div class="recruitmentType__title">
        <h2>募集職種</h2>
      </div>
      <div class="recruitmentType__description">
        <p>
          ただ今、家事代行マッチングサービス・カジママにて以下の職種を募集中（業務委託、インターン）です。
          <br>
          急成長中ですので、色んな経験ができる面白いフェーズです。
        </p>
      </div>
      <div class="recruitmentType__items">
          <!--MEMO: cssで自動改行をするために半角スペースを開ける -->
        <?php
        $args = [
          'post_type' => 'recruit',
        ];
        $my_query = new WP_Query($args);
        ?>
      <?php
      if ($my_query->have_posts()): ?>
        <ul>
          <?php while ($my_query->have_posts()):
            $my_query->the_post(); ?>
            <li>
              <a href="#<?php the_title(); ?>">
                <?php the_title(); ?>
              </a>
            </li>
          <?php
          endwhile; ?>
          <?php else: ?>
            <p>まだ投稿がありません。</p>
          <?php endif;
      wp_reset_postdata();
      ?>
        </ul>
      </div>
    </section>

    <section class="recruitDetail">
        <?php
        $args = [
          'post_type' => 'recruit',
        ];
        $my_query = new WP_Query($args);
        ?>
      <?php
      if ($my_query->have_posts()): ?>
          <?php while ($my_query->have_posts()):
            $my_query->the_post(); ?>
            <div class="recruitDetail__title" id="<?php the_title(); ?>">
              <h2><?php the_title(); ?></h2>
            </div>

            <div class="recruitDetail__detail">
              <?php the_content(); ?>
            </div>
          <?php
          endwhile; ?>
          <?php else: ?>
            <p>まだ投稿がありません。</p>
          <?php endif;
      wp_reset_postdata();
      ?>


    </section>
  </main>
  <?php get_footer(); ?>
</body>
</html>