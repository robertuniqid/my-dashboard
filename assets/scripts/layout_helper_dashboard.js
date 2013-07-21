/**
 * @note The Element Group Method has been stopped for now, it will be continued after the basic is done.
 * @author Andrei-Robert Rusu
 */
var LayoutHelperDashboard = {

  namespace          : null,
  layoutBodyObject   : null,
  _options           : {
    elementEffectIn       : ['fadeInUp', 'fadeInRight', 'fadeInDown', 'fadeInLeft'],//['bounceInUp', 'bounceInRight', 'bounceInDown', 'bounceInLeft']
    defaultEntypo         : '&#128196;',
    defaultColor          : ['#1abc9c', '#16a085', '#f1c40f', '#f39c12', '#2ecc71', '#27ae60', '#e67e22', '#d35400', '#3498db', '#2980b9', '#e74c3c', '#c0392b', '#9b59b6', '#8e44ad', '#34495e', '#2c3e50'],
    hoverTextColor        : '#ffffff',
    backgroundColor       : '#393939',
    hoverEffect           : 'pulse',
    hoverEffectDuration   : 1000,
    minMarginX : 10,
    maxMarginX : 50,
    minMarginY : 10,
    maxMarginY : 30,
    minPaddingX : 10,
    maxPaddingX : 25,
    minPaddingY : 5,
    maxPaddingY : 15
  },
  _triggerObject     : null,
  _dashboardObject   : null,
  _dashboardObjectElementsContainer : null,
  _dashboardElementGroups : {},

  Init : function(options) {
    this.layoutBodyObject = $('html > body');

    this._options = $.extend({}, this._options, options);
    this._options.elementEffectIn = typeof this._options.elementEffectIn == "object" ? $.makeArray(this._options.elementEffectIn) : this._options.elementEffectIn;

    if(typeof this._options.trigger != "undefined")
      this._triggerObject = typeof this._options.trigger == "object" ? this._options.trigger : $(this._options.trigger);

    if(typeof this._options.elements_groups != "undefined")
      this._dashboardElementGroups = typeof this._options.elements_groups == "object" ? $.makeArray(this._options.elements_groups) : this._options.elements_groups;

    if(typeof this._options.namespace != "undefined")
      this.namespace = this._options.namespace;

    this._configureDashboard();
  },

  _fetchDefaultColor : function() {
    return (this._options.defaultColor instanceof Array ?
            this._options.defaultColor
                [
                  Math.floor(
                      Math.random() * this._options.defaultColor.length
                  )
                ]
            : this._options.defaultColor);
  },

  _fetchDefaultBackgroundColor : function() {
    return (this._options.backgroundColor instanceof Array ?
            this._options.backgroundColor
                [
                Math.floor(
                    Math.random() * this._options.backgroundColor.length
                )
                ]
            : this._options.backgroundColor);
  },

  _fetchDefaultHoverTextColor : function() {
    return (this._options.hoverTextColor instanceof Array ?
            this._options.hoverTextColor
                [
                  Math.floor(
                      Math.random() * this._options.hoverTextColor.length
                  )
                ]
            : this._options.hoverTextColor);
  },

  _configureDashboard : function() {
    this._assignContainerToLayout();
    this._assignDashboardContent();
    this._assignDashboardTriggers();
  },

  _assignContainerToLayout : function() {
    var html = '';

    html += '<section id="' + this.namespace + '-container" class="' + this.namespace + '">' +
              '<section class="element_groups_container"></section>' +
            '</section>';

    this.layoutBodyObject.append(html);

    this._dashboardObject = $("#" + this.namespace + '-container');
    this._dashboardObject.hide();
  },

  _assignDashboardContent : function() {
    var objectInstance = this;
    this._dashboardObjectElementsContainer = this._dashboardObject.find('.element_groups_container');
    this._dashboardObjectElementsContainer.html('');

    $.each(this._dashboardElementGroups, function(index){
      objectInstance
          ._dashboardObjectElementsContainer
          .append(
              objectInstance._fetchDashboardElementHTMLAtIndex(index)
          );
      objectInstance._setDefaultStateDashboardElementHTMLAtIndex(index);
    });

    objectInstance
        ._dashboardObjectElementsContainer
        .append('<div style="clear:both;visibility: none;"></div>');

    this._assignDashboardElementsTriggers();
  },

  /**
   * This will use the addCSS function, in order to avoid jquery hover
   * @param group_index
   * @returns {string}
   * @private
   */
  _fetchDashboardElementHTMLAtIndex : function(group_index) {
    if(typeof this._dashboardElementGroups[group_index] == "undefined")
      return '';

    var elementInformation = this._dashboardElementGroups[group_index];
    var color = typeof elementInformation.color == "undefined" ? this._fetchDefaultColor() : elementInformation.color,
        backgroundColor= typeof elementInformation.backgroundColor == "undefined" ? this._fetchDefaultBackgroundColor() : elementInformation.backgroundColor,
        hoverTextColor = typeof elementInformation.hoverTextColor == "undefined" ? this._fetchDefaultHoverTextColor() : elementInformation.hoverTextColor;

    var html = '';

    html = '<section class="element-' + group_index + ' element ' +
              (typeof elementInformation.class == "undefined" ? '' : elementInformation.class) + '"' +
              'data-color="' + color + '"' +
              'data-background-color="' + backgroundColor + '"' +
              'data-hover-text-color="' + hoverTextColor + '"' +
             '><a href="' + elementInformation.link + '">' +
                 '<span class="entypo">' +
                 (
                     typeof elementInformation.entypo == "undefined"
                         ? this._options.defaultEntypo : elementInformation.entypo
                     ) +
                 '</span>' +
                '<span>' + elementInformation.name + '</span>' +
              '</a>' +
           '</section>';

    return html;
  },

  _setDefaultStateDashboardElementHTMLAtIndex : function(index) {
    var elementObject = typeof index == "object" ? index : this._dashboardObjectElementsContainer.find('> .element-' + index);

    elementObject.find('> a > span').css('color', elementObject.attr('data-color'));
    elementObject.css('background-color', elementObject.attr('data-background-color'));
  },

  _setHoverStateDashboardElementHTMLAtIndex : function(index) {
    var elementObject = typeof index == "object" ? index : this._dashboardObjectElementsContainer.find('> .element-' + index);

    elementObject.find('> a > span').css('color', elementObject.attr('data-hover-text-color'));
    elementObject.css('background-color', elementObject.attr('data-color'));

    if(typeof elementObject.attr('data-assigned-effect') != "undefined") {
      elementObject.removeClass('animated ' + elementObject.attr('data-assigned-effect'));
      elementObject.removeAttr('data-assigned-effect');
    }

    elementObject.attr('data-assigned-effect', this._options.hoverEffect);
    elementObject.addClass('animated ' + this._options.hoverEffect);

    setTimeout(function(){
      elementObject.removeClass('animated ' + elementObject.attr('data-assigned-effect'));
      elementObject.removeAttr('data-assigned-effect');
    }, this._options.hoverEffectDuration);
  },

  _assignDashboardTriggers : function() {
    var objectInstance = this;

    this._triggerObject.bind('click', function(event){
      event.stopPropagation();
      event.preventDefault();
      objectInstance.Display();
    });
  },

  _assignDashboardElementsTriggers : function() {
    var objectInstance = this;

    this._dashboardObjectElementsContainer.find('> .element').hover(function(){
      objectInstance._setHoverStateDashboardElementHTMLAtIndex($(this));
    }, function(){
      objectInstance._setDefaultStateDashboardElementHTMLAtIndex($(this));
    });

  },

  Display : function() {
    var objectInstance = this;

    objectInstance._arrangeDashboardContainer();

    objectInstance._dashboardObjectElementsContainer.find(' > .element').hide();

    this.layoutBodyObject.children().filter(':visible').addClass(objectInstance.namespace + '-hidden').fadeOut('fast').promise().done(function(){
      objectInstance._dashboardObject.fadeIn('slow').promise().done(function(){
        objectInstance.RecursiveAssignElementEffect();
      });
    });

    $(document).bind("keyup." + objectInstance.namespace, function(e){
        if (e.keyCode == 27) {
          objectInstance.Close();
        }
    });

    this._assignResizeEvent();
  },

  RecursiveAssignElementEffect : function() {
    var objectInstance = this;

    if(this._haveAllDashboardElementsTriggered() ) {
      return;
    }

    var currentElement = this._dashboardObjectElementsContainer.find('> .element').not(':visible').filter(':first');

    if(typeof currentElement.attr('data-assigned-effect') != "undefined") {
      currentElement.removeClass(currentElement.attr('data-assigned-effect'));
      currentElement.removeAttr('data-assigned-effect');
    }

    var effect = (objectInstance._options.elementEffectIn instanceof Array ?
        objectInstance._options.elementEffectIn
        [
            Math.floor(
                Math.random() * objectInstance._options.elementEffectIn.length
            )
        ]
        : objectInstance._options.elementEffectIn);

    currentElement.show()
                  .attr('data-assigned-effect', effect)
                  .addClass('animated ' + effect);

    setTimeout(function(){
      objectInstance.RecursiveAssignElementEffect();
    }, 50)
  },

  _haveAllDashboardElementsTriggered : function() {
    return !(this._dashboardObjectElementsContainer.find('> .element:hidden').length > 0);
  },

  Close   : function() {
    this.layoutBodyObject.children().filter('.' + this.namespace + '-hidden').removeClass(this.namespace + '-hidden').fadeIn('slow');
    this._dashboardObject.fadeOut('slow');

    $(document).unbind("keyup." + objectInstance.namespace);

    this._unAssignResizeEvent();
  },

  _assignResizeEvent : function() {
    var objectInstance = this;

    $(window).bind('resize.' + this.namespace, function () {
      objectInstance._arrangeDashboardContainer();
    });
  },

  _unAssignResizeEvent : function() {
    $(window).unbind('resize.' + this.namespace);
  },

  _arrangeDashboardContainer : function() {
    var windowObject = $(window);

    var windowWidth  = windowObject.width(),
        windowHeight = windowObject.height(),
        unAssignedWidth  = windowWidth,
        unAssignedHeight = windowHeight,
        proposedDelimiter = (windowHeight * 0.025);

    unAssignedHeight -= (parseInt(this._dashboardObject.css('border-top-width'), 10) + parseInt(this._dashboardObject.css('border-bottom-width'), 10));
    unAssignedWidth -= (parseInt(this._dashboardObject.css('border-left-width'), 10) + parseInt(this._dashboardObject.css('border-right-width'), 10));

    var paddingX = proposedDelimiter,
        paddingY = proposedDelimiter,
        marginX  = proposedDelimiter,
        marginY  = proposedDelimiter;

    paddingX = (paddingX >= this._options.maxPaddingX) ? this._options.maxPaddingX : (paddingX < this._options.minPaddingX ? this._options.minPaddingX : paddingX);
    paddingY = (paddingY >= this._options.maxPaddingY) ? this._options.maxPaddingY : (paddingY < this._options.minPaddingY ? this._options.minPaddingY : paddingY);
    marginX = (marginX >= this._options.maxMarginX) ? this._options.maxMarginX : (marginX < this._options.minMarginX ? this._options.minMarginX : marginX);
    marginY = (marginY >= this._options.maxMarginY) ? this._options.maxMarginY : (marginY < this._options.maxMarginY ? this._options.maxMarginY : marginY);

    unAssignedWidth  -= ((paddingX + marginX) * 2);
    unAssignedHeight -= ((paddingY + marginY) * 2);

    this._dashboardObject.css('margin', marginY + 'px ' + marginX + 'px');
    this._dashboardObject.css('padding', paddingY + 'px ' + paddingX + 'px');

    this._dashboardObject.css('width', unAssignedWidth);
    this._dashboardObject.css('min-height', unAssignedHeight);
  }

};
