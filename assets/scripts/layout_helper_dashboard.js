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
  _dashboardElementGroups : {},
  _dashboardGroupContainers : {},

  Init : function(options) {
    this._options = options;

    this.layoutBodyObject = $('body');

    if(typeof this._options.trigger != "undefined")
      this._triggerObject = typeof this._options.trigger == "object" ? this._options.trigger : $(this._options.trigger);

    if(typeof this._options.elements_groups != "undefined")
      this._dashboardElementGroups = typeof this._options.elements_groups == "object" ? $.makeArray(this._options.elements_groups) : this._options.elements_groups;

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
              '<section class="element_groups_container"></section>' +
            '</section>';

    this.layoutBodyObject.append(html);

    this._dashboardObject = $("#" + this.namespace + '-container');
    this._dashboardObject.hide();
  },

  _assignDashboardContent : function() {
    var objectInstance = this;
    this._dashboardObjectElementsContainer = this._dashboardObject.find('.element_groups_container');
    this._dashboardObjectElementsContainer.html();

    $.each(this._dashboardElementGroups, function(index){
      objectInstance
          ._dashboardObjectElementsContainer
          .append(
              objectInstance._fetchDashboardElementHTMLAtIndex(index)
          );
    });

    $.each(this._dashboardElementGroups, function(group_index){
      if(typeof objectInstance._dashboardElementGroups[group_index]['elements'] != "undefined") {
        var html = '<section style="display:none" data-group-index="' + group_index+ '" class="dashboard-group-container dashboard-group-container-' + group_index + '">';

        $.each(objectInstance._dashboardElementGroups[group_index].elements, function(element_index){
          html += objectInstance._fetchDashboardGroupElementHTMLAtGroupAtIndex(group_index, element_index);
        });

        html    += '</section>';

        objectInstance._dashboardObjectElementsContainer.append(html);
      }
    });

    this._dashboardGroupContainers = this._dashboardObjectElementsContainer.find('.dashboard-group-container');
    this._assignDashboardElementsTriggers();
  },

  _fetchDashboardElementHTMLAtIndex : function(group_index) {
    if(typeof this._dashboardElementGroups[group_index] == "undefined")
      return '';

    var elementInformation = this._dashboardElementGroups[group_index];

    var html = '';

    if(typeof elementInformation.elements == "undefined")
     html = '<section class="element ' + (typeof elementInformation.class == "undefined" ? '' : elementInformation.class) + '">' +
                '<a href="' + elementInformation.link + '">' +
                  '<span>' + elementInformation.name + '</span>' +
                '</a>' +
               '</section>';
    else
      html = '<section class="element ' + (typeof elementInformation.class == "undefined" ? '' : elementInformation.class) + '">' +
              '<a data-group-index="' + group_index+ '" class="display-dashboard-group dashboard-group-' + group_index + '">' +
                '<span>' + elementInformation.name + '</span>' +
              '</a>' +
             '</section>';

    return html;
  },

  _fetchDashboardGroupElementHTMLAtGroupAtIndex : function(group_index, index) {
    if(typeof this._dashboardElementGroups[group_index]['elements'][index] == "undefined")
      return '';

    var elementInformation = this._dashboardElementGroups[group_index]['elements'][index];

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

  _assignDashboardElementsTriggers : function() {
    var objectInstance = this;

    this._dashboardObjectElementsContainer.find('.display-dashboard-group').bind('click', function(){
      var group_index = $(this).data('group-index');

      objectInstance._dashboardGroupContainers
          .not('[data-group-index="' + group_index + '"]')
          .fadeOut('slow')
          .promise()
          .done(function(){
        objectInstance._dashboardGroupContainers.filter('[data-group-index="' + group_index + '"]').fadeIn('slow');
      });
    });
  },

  Display : function() {
    var objectInstance = this;

    objectInstance._arrangeDashboardContainer();

    this.layoutBodyObject.children().fadeOut('fast').promise().done(function(){
      objectInstance._dashboardObject.fadeIn('slow');
    });

    this._assignResizeEvent();
  },

  Close   : function() {
    this.layoutBodyObject.children().fadeIn('slow');
    this._dashboardObject.fadeOut('slow');

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
