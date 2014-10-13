//we should set up some keyboard shortcuts for list views, some for detail view and some for edit view
//some might be based on scraping what is on the screen
//might be nice to somehow indicate what shortcuts are available.
$(function(){
  view=$('#view').attr("value")
  if (view=="List" ||view=="GeoTools"){
    //things that only make sense in list view
    //create
    Mousetrap.bind(['mod+a'], function() {
      $(".addButton").click();
      return false;
    });
    //doubletap a letter for the alphabet search
    Mousetrap.bind(['a a','b b','c c','d d','e e','f f','g g','h h','i i','j j','k k','l l','m m','n n','o o','p p','q q','r r','s s','t t','u u','v v','w w','x x','y y','z z' ], function(e,combo) {
      $('.alphabetSearch #'+combo[0].toUpperCase()).click()
    });
    Mousetrap.bind('pagedown', function() {
      $('#listViewNextPageButton').click();
      return false;
    });
    Mousetrap.bind('pageup', function() {
      $('#listViewPreviousPageButton').click();
      return false;
    });


  }
  if (view=="Edit"){
    //things that only make sense in edit view
    //save
    Mousetrap.bindGlobal('mod+s', function() {
      $(".btn[type=submit]").click();
      return false;
    });
  }
  if (view=="Detail"){
    //things that only make sense in detail view
    //edit
    Mousetrap.bind('mod+e', function(e) {
      $(".btn[id$=LBL_EDIT]").click();
      return false;
    });
    //duplicate
    Mousetrap.bind('mod+d', function() {
      window.location.href=$('li[id$=LBL_DUPLICATE] a').attr("href");
      return false;
    });

    //next record
    Mousetrap.bind('left', function() {
      $('#detailViewPreviousRecordButton').click();
      return false;
    });
    //previous record
    Mousetrap.bind('right', function() {
      $('#detailViewNextRecordButton').click();
      return false;
    });

    //pageup and pagedown for the nav pills
    Mousetrap.bind('pagedown', function() {
      currentpill=$('ul.nav-pills .active').index();
      moveto=$('ul.nav-pills').children()[currentpill+1]
      if(moveto){moveto.click()};
      return false;
    });
    Mousetrap.bind('pageup', function() {
      currentpill=$('ul.nav-pills .active').index();
      moveto=$('ul.nav-pills').children()[currentpill-1]
      if(moveto){moveto.click()};
      return false;
    });


  }
  //things that make sense from everywhere

  //go to list view
  Mousetrap.bind('mod+l', function() {
    $(".sideBarContents [id$=LBL_RECORDS_LIST]").click();
    return false;
  });

  //escape to go back
  Mousetrap.bind('esc', function() {
    window.history.back();
  });

  Mousetrap.bind(['mod+m 1','mod+m 2','mod+m 3','mod+m 4','mod+m 5','mod+m 6','mod+m 7','mod+m 8','mod+m 9','mod+m 0'], function(e,combo) {
    menunum=combo.slice(-1);
    menulink=$("#largeNav a")[menunum];
    if(menulink){
      window.location.href=$(menulink).attr("href");
    }
  });


});
