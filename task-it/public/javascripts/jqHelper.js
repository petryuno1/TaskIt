$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function toggleSettingsDrawer(){
    $("#nav-header").toggleClass('expanded');
    $("#nav-settings").toggleClass('expanded');
    $("#main-content").toggleClass('expanded');
}