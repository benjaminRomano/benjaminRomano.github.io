// $(document).foundation();


var skillSelectors = {
    '#languageSelector' : '#languages',
    '#databaseSelector': '#databases',
    '#frameworkSelector': '#frameworks',
    '#gameEngineSelector': '#gameEngines'
};

var skillClickHandler = function(e) {
}

$(document).ready(function() {
    for (let s in skillSelectors) {
        let ele = $(s);
        ele.click(function(e) {
            for (let s2 in skillSelectors) {
                let otherEle = $(s2);
                otherEle.removeClass('active');
                $(skillSelectors[s2]).hide();
            }
            
            ele.addClass('active');
            $(skillSelectors[s]).show();
        });
    }
});