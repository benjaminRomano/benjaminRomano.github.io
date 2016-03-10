'use strict';

var skillGroups = {
    '#languages': ['C#', 'JavaScript', 'Node.js', 'Ruby', 'Python', 'Java', 'C++', 'Perl', 'Go', 'FORTRAN', 'Scheme', 'TypeScript'],
    '#databases': ['SQL Server', 'MySql', 'MongoDb'],
    '#frameworks': ['Angular.js', 'ASP.NET Web API', 'ASP.NET MVC', 'Ruby on Rails', 'Django', 'MEAN Stack'],
    '#gameEngines': ['Unreal Engine', 'Unity Engine']
};

var skillGroupSelectors = {
    '#languageSelector': '#languages',
    '#databaseSelector': '#databases',
    '#frameworkSelector': '#frameworks',
    '#gameEngineSelector': '#gameEngines'
};

function createSkills() {
    for (var skillGroup in skillGroups) {

        var skillNames = skillGroups[skillGroup];

        var container = $(skillGroup);

        var count = 0;

        var skillEles = [];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = skillNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var skillName = _step.value;


                var skillEle = $('<p class="large-2 small-3 centered medium-3 columns skill-item">' + skillName + '</p>');
                skillEles.push(skillEle);

                count++;

                if (count >= 3) {
                    container.append(createSkillRow(skillEles));
                    skillEles = [];
                    count = 0;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (skillEles.length != 0) {
            container.append(createSkillRow(skillEles));
        }
    }
}

function createSkillRow(skillEles) {

    if (skillEles.length == 3) {
        skillEles[0].addClass('small-offset-2 medium-offset-2 large-offset-3');
    } else if (skillEles.length == 2) {
        skillEles[0].addClass('small-offset-3 medium-offset-3 large-offset-4');
    } else if (skillEles.length == 1) {
        skillEles[0].addClass('small-offset-5 medium-offset-5 large-offset-5');
    }

    skillEles[skillEles.length - 1].addClass('end');

    var row = $('<div class="row"></div>');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = skillEles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var skillEle = _step2.value;

            row.append(skillEle);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return row;
}

$(document).ready(function () {
    createSkills();

    var _loop = function _loop(s) {

        var ele = $(s);

        ele.click(function () {

            for (var s2 in skillGroupSelectors) {
                var otherEle = $(s2);
                otherEle.removeClass('active');
                $(skillGroupSelectors[s2]).hide();
            }

            ele.addClass('active');
            $(skillGroupSelectors[s]).show();
        });
    };

    for (var s in skillGroupSelectors) {
        _loop(s);
    }
});