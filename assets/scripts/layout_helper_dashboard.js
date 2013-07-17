var LayoutHelperDashboard = {

  namespace          : null,
  layoutBodyObject   : null,
  isDisplayed        : false,
  _options           : {
    min_margin_x : 10,
    max_margin_x : 50,
    min_margin_y : 10,
    max_margin_y : 30,
    min_padding_x : 10,
    max_padding_x : 25,
    min_padding_y : 5,
    max_padding_y : 15
  },
  _triggerObject     : null,
  _dashboardObject   : null,
  _dashboardObjectElementsContainer : null,
  _dashboardElements : {},

  Init : function(options) {
    this._options = options;

    this.layoutBodyObject = $('body');

    if(typeof this._options.trigger != "undefined")
      this._triggerObject = typeof this._options.trigger == "object" ? this._options.trigger : $(this._options.trigger);

    if(typeof this._options.elements != "undefined")
      this._dashboardElements = typeof this._options.elements == "object" ? $.makeArray(this._options.elements) : this._options.elements;

    if(typeof this._options.namespace != "undefined")
      this.namespace = this._options.namespace;

    this._configureDashboard();
  },

  _configureDashboard : function() {
    this._assignContainerToLayout();
    this._assignDashboardContent();
    this._assignDashboardTriggers();
  },

  _assignContainerToLayout : function() {
    var html = '';

    html += '<section id="' + this.namespace + '-container" class="' + this.namespace + '">' +
              '<section class="elements_container"></section>' +
            '</section>';

    this.layoutBodyObject.append(html);

    this._dashboardObject = $("#" + this.namespace + '-container');
    this._dashboardObject.hide();
  },

  _assignDashboardContent : function() {
    var objectInstance = this;
    this._dashboardObjectElementsContainer = this._dashboardObject.find('.elements_container');
    this._dashboardObjectElementsContainer.html();

    $.each(this._dashboardElements, function(index){
      objectInstance
          ._dashboardObjectElementsContainer
          .append(
              objectInstance._fetchDashboardElementHTMLAtIndex(index)
          );
    });
  },

  _fetchDashboardElementHTMLAtIndex : function(index) {
    if(typeof this._dashboardElements[index] == "undefined")
      return '';

    var elementInformation = this._dashboardElements[index];

    var html = '<section class="element">' +
                '<a href="' + elementInformation.link + '">' +
                  '<span>' + elementInformation.name + '</span>' +
                '</a>' +
               '</section>';

    return html;
  },

  _assignDashboardTriggers : function() {
    var objectInstance = this;

    this._triggerObject.bind('click', function(){
      objectInstance.Display();
    });
  },

  Display : function() {
    var objectInstance = this;

    this._arrangeDashboardContainer();

    this.layoutBodyObject.children().hide();
    this._dashboardObject.show();

    this._assignResizeEvent();
  },

  Close   : function() {
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

    var paddingX = proposedDelimiter,
        paddingY = proposedDelimiter,
        marginX  = proposedDelimiter,
        marginY  = proposedDelimiter;

    paddingX = (paddingX >= this._options.max_padding_x) ? this._options.max_padding_x : (paddingX < this._options.min_padding_x ? this._options.min_padding_x : paddingX);
    paddingY = (paddingY >= this._options.max_padding_y) ? this._options.max_padding_y : (paddingY < this._options.min_padding_y ? this._options.min_padding_y : paddingY);
    marginX = (marginX >= this._options.max_margin_x) ? this._options.max_margin_x : (marginX < this._options.min_margin_x ? this._options.min_margin_x : marginX);
    marginY = (marginY >= this._options.max_margin_y) ? this._options.max_margin_y : (marginY < this._options.max_margin_y ? this._options.max_margin_y : marginY);

    unAssignedWidth  -= ((paddingX + marginX) * 2);
    unAssignedHeight -= ((paddingY + marginY) * 2);

    this._dashboardObject.css('margin', marginY + 'px ' + marginX + 'px');
    this._dashboardObject.css('padding', paddingY + 'px ' + paddingX + 'px');

    this._dashboardObject.css('width', unAssignedWidth);
    this._dashboardObject.css('height', unAssignedHeight);
  }

};
