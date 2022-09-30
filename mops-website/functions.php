<?php

// https://www.flapism.jp/wordpress/57/を参考
function codex_custom_init()
{
  // 記事投稿の格納先設定
  $labels = [
    'name' => '記事投稿',
    'singular_name' => '記事投稿',
    'edit_item' => '記事追加',
    'parent_item_colon' => '',
    'menu_name' => '記事投稿',
  ];

  $args = [
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => ['slug' => 'news'],
    'capability_type' => 'post',
    // 'has_archive' => true,
    'menu_position' => 5,
    'menu_icon' => 'dashicons-welcome-write-blog',
    'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'],
  ];

  register_post_type('news', $args);

  // 求人情報の格納先設定
  $labels = [
    'name' => '求人情報',
    'singular_name' => '求人情報',
    'edit_item' => '求人追加',
    'parent_item_colon' => '',
    'menu_name' => '求人情報',
  ];

  $args = [
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => ['slug' => 'recruit'],
    'capability_type' => 'post',
    'menu_position' => 5,
    'menu_icon' => 'dashicons-groups',
    'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'],
  ];

  register_post_type('recruit', $args);

  // 旧記事：お知らせの格納先設定
  $labels = [
    'name' => '【旧記事】お知らせ',
    'singular_name' => '【旧記事】お知らせ',
    'edit_item' => 'お知らせ追加',
    'parent_item_colon' => '',
    'menu_name' => '【旧記事】お知らせ',
  ];

  $args = [
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'hierarchical' => true,
    'query_var' => true,
    'rewrite' => ['slug' => 'info'],
    'capability_type' => 'post',
    'menu_position' => 5,
    'menu_icon' => 'dashicons-groups',
    'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'],
  ];

  register_post_type('info', $args);
}
add_action('init', 'codex_custom_init');

// 旧記事：投稿の格納先設定
// https://star-webstudio.com/wpchange/ を参考
function Change_menulabel()
{
  global $menu;
  global $submenu;
  $name = '【旧記事】投稿';
  $menu[5][0] = $name;
  $submenu['edit.php'][5][0] = $name . '一覧';
  $submenu['edit.php'][10][0] = '新しい' . $name;
}
function Change_objectlabel()
{
  global $wp_post_types;
  $name = '【旧記事】投稿';
  $labels = &$wp_post_types['post']->labels;
  $labels->name = $name;
  $labels->singular_name = $name;
  $labels->add_new = _x('追加', $name);
  $labels->add_new_item = $name . 'の新規追加';
  $labels->edit_item = $name . 'の編集';
  $labels->new_item = '新規' . $name;
  $labels->view_item = $name . 'を表示';
  $labels->search_items = $name . 'を検索';
  $labels->not_found = $name . 'が見つかりませんでした';
  $labels->not_found_in_trash = 'ゴミ箱に' . $name . 'は見つかりませんでした';
}
add_action('init', 'Change_objectlabel');
add_action('admin_menu', 'Change_menulabel');

// /*【管理画面】投稿メニューを非表示 */
// function remove_menus()
// {
//   global $menu;
//   remove_menu_page('edit.php'); // 投稿を非表示
// }
// add_action('admin_menu', 'remove_menus');
//

?>
