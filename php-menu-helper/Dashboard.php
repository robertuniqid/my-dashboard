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
        'entypo'=>  '&#8962;',
        'color' =>  '#3498db',
        'class' =>  'home'
      ),
      array(
        'name'  =>  'Ordinele mele',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_INDEX,
        'entypo'=>  '&#62977;',
        'color' =>  '#2ecc71',
        'class' =>  'my-orders',
      ),
      array(
        'name'  =>  'Portofel',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_EARNINGS_INDEX,
        'entypo'=>  '&#128710;',
        'color' =>  '#2ecc71',
        'class' =>  'wallet'
      ),
      array(
        'name'  =>  'Payment Types',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_INDEX,
        'entypo'=>  '&#128203;',
        'color' =>  '#e67e22',
        'class' =>  'payment-types'
      ),
      array(
        'name'  =>  'Payment Extra Fields',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_FIELD_INDEX,
        'entypo'=>  '&#57347;',
        'color' =>  '#e67e22',
        'class' =>  'payment-extra-fields'
      ),
      array(
        'name'  =>  'Payment Status List',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_STATUS_INDEX,
        'entypo'=>  '&#57349;',
        'color' =>  '#e67e22',
        'class' =>  'payment-status-list'
      ),#
      array(
        'name'  =>  'Shipping Types',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_INDEX,
        'entypo'=>  '&#9992;',
        'color' =>  '#f1c40f',
        'class' =>  'shipping-types'
      ),
      array(
        'name'  =>  'Shipping Extra Fields',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_FIELD_INDEX,
        'entypo'=>  '&#57347;',
        'color' =>  '#f1c40f',
        'class' =>  'shipping-extra-fields'
      ),
      array(
        'name'  =>  'Shipping Status Administration',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_STATUS_INDEX,
        'entypo'=>  '&#57349;',
        'color' =>  '#f1c40f',
        'class' =>  'shipping-status-list'
      ),
      array(
        'name'  =>  'Product Administration',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_INDEX,
        'entypo'=>  '&#128213;',
        'color' =>  '#e74c3c',
        'class' =>  'product-list'
      ),
      array(
        'name'  =>  'Product Category Administration',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
        'entypo'=>  '&#59392;',
        'color' =>  '#e74c3c',
        'class' =>  'product-category-list'
      ),
      array(
        'name'  =>  'Product Department Administration',
        'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
        'entypo'=>  '&#128193;',
        'color' =>  '#e74c3c',
        'class' =>  'product-department-list'
      ),
      array(
        'name'  =>  'User Administration',
        'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_INDEX,
        'entypo'=>  '&#128100;',
        'color' =>  '#34495e',
        'class' =>  'user-administration'
      ),
      array(
        'name'  =>  'User Type Administration',
        'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_USER_TYPE_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#34495e',
        'class' =>  'user-type-administration'
      ),
      array(
        'name'  =>  'Afiliere - Pagina Personala',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-personal'
      ),
      array(
        'name'  =>  'Ghidul Afiliatului',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_GUIDE,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-guide'
      ),
      array(
        'name'  =>  'Afiliere - Activitate Useri',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_USER_ACTIVITY,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-user-activity'
      ),
      array(
        'name'  =>  'Statistici Afiliati',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_STATISTICS_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-affiliate-statistics'
      ),
      array(
        'name'  =>  'Afiliere - Statistici Ordine',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-personal-orders-statistics'
      ),
      array(
        'name'  =>  'Afiliere - Statistici Ordine Globale',
        'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#8e44ad',
        'class' =>  'affiliate-system-global-orders-statistics'
      ),
      array(
        'name'  =>  'Order Servicing',
        'link'  =>  Model_Helper_Links::SHOP_SERVICING_ORDERS,
        'entypo'=>  '&#128101;',
        'color' =>  '#d35400',
        'class' =>  'shop-servicing-handling'
      ),
      array(
        'name'  =>  'Invoices',
        'link'  =>  Model_Helper_Links::SHOP_SERVICING_INVOICES,
        'entypo'=>  '&#128101;',
        'color' =>  '#d35400',
        'class' =>  'shop-servicing-handling-invoices'
      ),
      array(
        'name'  =>  'Order Shipping',
        'link'  =>  Model_Helper_Links::SHOP_SHIPPING_INDEX,
        'entypo'=>  '&#128101;',
        'color' =>  '#f1c40f',
        'class' =>  'shop-servicing-handling-shipping'
      ),
      array(
        'name'      =>  'Documente Administrative',
        'link'      =>  Model_Helper_Links::ADMINISTRATION_DOCUMENTS,
        'entypo'    =>  '&#128101;',
        'color'     =>  '#2980b9',
        'class'     =>  'administration-documents',
      ),
    );

    return $return;//self::walkMenu($return);
  }

  public static function getDashboardMulti(){
    $return = array(
      array(
        'name'  =>  'Pagina Produselor',
        'link'  =>  Model_Helper_Links::HOME,
        'class' =>  'home'
      ),
      array(
        'name'  =>  'Ordinele mele',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_INDEX,
        'class' =>  'my-orders'
      ),
      array(
        'name'  =>  'Portofel',
        'link'  =>  Model_Helper_Links::SHOP_ORDERS_EARNINGS_INDEX,
        'class' =>  'wallet'
      ),
      array(
        'name'    =>  'Shop Administration',
        'link'    =>  Model_Helper_Links::SHOP_ADMINISTRATION,
        'class'   =>  'shop-administration',
        'elements'=>  array(
          array(
            'name'  =>  'Payment Types',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_INDEX,
            'class' =>  'payment-types'
          ),
          array(
            'name'  =>  'Payment Extra Fields',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_FIELD_INDEX,
            'class' =>  'payment-extra-fields'
          ),
          array(
            'name'  =>  'Payment Status List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PAYMENT_TYPE_STATUS_INDEX,
            'class' =>  'payment-status-list'
          ),
          array(
            'name'  =>  'Shipping Types',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_INDEX,
            'class' =>  'shipping-types'
          ),
          array(
            'name'  =>  'Shipping Extra Fields',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_FIELD_INDEX,
            'class' =>  'shipping-extra-fields'
          ),
          array(
            'name'  =>  'Shipping Status List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_SHIPPING_TYPE_STATUS_INDEX,
            'class' =>  'shipping-status-list'
          ),
          array(
            'name'  =>  'Product List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_INDEX,
            'class' =>  'product-list'
          ),
          array(
            'name'  =>  'Product Category List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
            'class' =>  'product-category-list'
          ),
          array(
            'name'  =>  'Product Department List',
            'link'  =>  Model_Helper_Links::SHOP_ADMINISTRATION_PRODUCT_CATEGORY_INDEX,
            'class' =>  'product-department-list'
          ),
        ),
      ),
      array(
        'name'    =>  'User Administration',
        'link'    =>  Model_Helper_Links::USER_ADMINISTRATION_INDEX,
        'class'   =>  'user-administration',
        'elements'=>  array(
          array(
            'name'  =>  'Users',
            'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_INDEX,
            'class' =>  'user-administration'
          ),
          array(
            'name'  =>  'User Types',
            'link'  =>  Model_Helper_Links::USER_ADMINISTRATION_USER_TYPE_INDEX,
            'class' =>  'user-type-administration'
          ),
        ),
      ),
      array(
        'name'    =>  'Sistemul de Afiliere',
        'link'    =>  Model_Helper_Links::SHOP_AFFILIATE_INDEX,
        'class'   =>  'affiliate-system-personal',
        'elements'=>  array(
          array(
            'name'  =>  'Pagina Personala',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_INDEX,
            'class' =>  'affiliate-system-personal'
          ),
          array(
            'name'  =>  'Ghidul Afiliatului',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_GUIDE,
            'class' =>  'affiliate-system-guide'
          ),
          array(
            'name'  =>  'Activitate Useri',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_USER_ACTIVITY,
            'class' =>  'affiliate-system-user-activity'
          ),
          array(
            'name'  =>  'Statistici Afiliati',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_STATISTICS_INDEX,
            'class' =>  'affiliate-system-affiliate-statistics'
          ),
          array(
            'name'  =>  'Statistici Ordine Proprii',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
            'class' =>  'affiliate-system-personal-orders-statistics'
          ),
          array(
            'name'  =>  'Statistici Ordine Globale',
            'link'  =>  Model_Helper_Links::SHOP_AFFILIATE_ORDERS_STATISTICS_INDEX,
            'class' =>  'affiliate-system-global-orders-statistics'
          ),
        ),
      ),
      array(
        'name'    =>  'Servire Shop',
        'link'    =>  Model_Helper_Links::SHOP_SERVICING_INDEX,
        'class'   =>  'shop-servicing',
        'elements'=>  array(
          array(
            'name'  =>  'Plata',
            'link'  =>  Model_Helper_Links::SHOP_SERVICING_ORDERS,
            'class' =>  'shop-servicing-handling'
          ),
          array(
            'name'  =>  'Facturi',
            'link'  =>  Model_Helper_Links::SHOP_SERVICING_INVOICES,
            'class' =>  'shop-servicing-handling-invoices'
          ),
          array(
            'name'  =>  'Livrare',
            'link'  =>  Model_Helper_Links::SHOP_SHIPPING_INDEX,
            'class' =>  'shop-servicing-handling-shipping'
          ),
        ),
      ),
      array(
        'name'      =>  'Documente Administrative',
        'link'      =>  Model_Helper_Links::ADMINISTRATION_DOCUMENTS,
        'class'     =>  'administration-documents',
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