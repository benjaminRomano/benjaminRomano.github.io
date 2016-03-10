let skillGroups = {
    '#languages': ['C#', 'JavaScript', 'Node.js', 'Ruby', 'Python', 'Java', 'C++', 'Perl', 'Go', 'FORTRAN', 'Scheme', 'TypeScript'],
    '#databases': ['SQL Server', 'MySql', 'MongoDb'],
    '#frameworks': ['AngularJS', 'ASP.NET Web API', 'ASP.NET MVC', 'Ruby on Rails', 'Django', 'MEAN Stack'],
    '#gameEngines': ['Unreal Engine', 'Unity Engine']
};

let skillGroupSelectors = {
    '#languageSelector' : '#languages',
    '#databaseSelector': '#databases',
    '#frameworkSelector': '#frameworks',
    '#gameEngineSelector': '#gameEngines'
};

function createSkills() {
    for (let skillGroup in skillGroups) {
        
        let skillNames = skillGroups[skillGroup];
        
        let container = $(skillGroup);
        
        let count = 0;
        
        let skillEles = [];
        
        for (let skillName of skillNames) {
            
            let skillEle = $('<p class="large-2 small-3 centered medium-3 columns skill-item">' + skillName + '</p>');
            skillEles.push(skillEle);
            
            count++;
            
            if (count >= 3) {
                container.append(createSkillRow(skillEles));
                skillEles = [];
                count = 0;
            }
        }
        
        if (skillEles.length != 0) {
            container.append(createSkillRow(skillEles));
        }
    }
}

function createSkillRow(skillEles) {
    
    if (skillEles.length == 3) {
        skillEles[0].addClass('small-offset-1 medium-offset-2 large-offset-3');
    } else if (skillEles.length == 2) {
        skillEles[0].addClass('small-offset-3 medium-offset-3 large-offset-4');
    } else if (skillEles.length == 1) {
        skillEles[0].addClass('small-offset-5 medium-offset-5 large-offset-5');
    }
    
    skillEles[skillEles.length -1].addClass('end');
    
    let row =  $('<div class="row"></div>');
    
    for (let skillEle of skillEles) {
        row.append(skillEle);
    }
    
    return row;
}

$(document).ready(() => {
    createSkills();
    for (let s in skillGroupSelectors) {
        
        let ele = $(s);
        
        ele.click(() => {
            
            for (let s2 in skillGroupSelectors) {
                let otherEle = $(s2);
                otherEle.removeClass('active');
                $(skillGroupSelectors[s2]).hide();
            }
            
            ele.addClass('active');
            $(skillGroupSelectors[s]).show();
        });
    }
});


