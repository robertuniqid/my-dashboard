<?php

/**
 * Model_Helper_Dashboard
 *
 * Access Model_Helper_Dashboard - internal functions
 *
 * @author Robert
 */
class Model_Helper_Dashboard {


  public static function getDashboard(){
    $return = array(
      array(
        'name'  =>  'Pagina Produselor',
        'link'  =>  Model_Helper_Links::HOME,
        'class' =>  ''
      ),
      array(
        'name'  =>  'Ordinele mele',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_INDEX,
        'class' =>  ''
      ),
      array(
        'name'  =>  'Portofel',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_EARNINGS_INDEX,
        'class' =>  ''
      ),
      array(
        'name'    =>  'Shop Administration',
        'link'    =>  Model_Helper_Links::SHOP_ADMINISTRATION,
        'class'   =>  '',
        'elements'=>  array(
          array(
            'name'  =>  'Payment Types',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Payment Extra Fields',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_FIELD_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Payment Status List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_STATUS_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Shipping Types',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Shipping Extra Fields',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_FIELD_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Shipping Status List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_STATUS_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Product List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Product Category List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Product Department List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
            'class' =>  ''
          ),
        ),
      ),
      array(
        'name'    =>  'User Administration',
        'link'    =>  Model_Helper_Links::USER_ADMINISTRATION_INDEX,
        'class'   =>  '',
        'elements'=>  array(
          array(
            'name'  =>  'Users',
            'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'User Types',
            'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_USER_TYPE_INDEX,
            'class' =>  ''
          ),
        ),
      ),
      array(
        'name'    =>  'Sistemul de Afiliere',
        'link'    =>  Model_Helper_Links::SHOP_AFFILIATE_INDEX,
        'class'   =>  '',
        'elements'=>  array(
          array(
            'name'  =>  'Pagina Personala',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Ghidul Afiliatului',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_GUIDE,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Activitate Useri',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_USER_ACTIVITY,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Statistici Afiliati',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_STATISTICS_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Statistici Ordine Proprii',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Statistici Ordine Globale',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
            'class' =>  ''
          ),
        ),
      ),
      array(
        'name'    =>  'Servire Shop',
        'link'    =>  Model_Helper_Links::SHOP_SERVICING_INDEX,
        'class'   =>  '',
        'elements'=>  array(
          array(
            'name'  =>  'Plata',
            'link'  =>  Model_Helper_Links::SHOP_SERVICING_ORDERS,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Facturi',
            'link'  =>  Model_Helper_Links::SHOP_SERVICING_INVOICES,
            'class' =>  ''
          ),
          array(
            'name'  =>  'Livrare',
            'link'  =>  Model_Helper_Links::SHOP_SHIPPING_INDEX,
            'class' =>  ''
          ),
        ),
      ),
      array(
        'name'      =>  'Documente Administrative',
        'link'      =>  Model_Helper_Links::ADMINISTRATION_DOCUMENTS,
        'children'  =>  array()
      ),
    );

    return $return;//self::walkMenu($return);
  }

  private static function walkMenu($menu){
    foreach($menu as $key =>  $m) {
      if(isset($m['elements'])) {
        $m['elements'] = self::walkMenu($m['elements']);

        $menu[$key] = $m;
      }

      $tokens = explode('/', $m['link']);

      if(count($tokens) == 3) {
        $module     = $tokens[0];
        $controller = $tokens[1];
        $action     = $tokens[2];
      } elseif(count($tokens) == 2) {
        $module     = $tokens[0];
        $controller = $tokens[1];
        $action     = 'index';
      } elseif($tokens[0] == 'index') {
        $module = 'default';
        $controller = 'index';
        $action = 'index';
      } else {
        $module = $tokens[0];
        $controller = 'index';
        $action = 'index';
      }

      if(!Model_Operation_Acl::getInstance()->hasAccess(Model_Operation_Auth::getInstance()->getUserRoleId(), $module, $controller, $action)) {
        unset($menu[$key]);
      }
    }

    return $menu;
  }
}