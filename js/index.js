$(document).ready(function(){
    getSkill();
    SetCwinHeight();
});

$('#msit132').on('click',function(){
});


//載入個人技能
function getSkill(){
    $.ajax({
        url: 'json/skill.json',
        dataType: 'json',
        success: function(data) {
            const skill = data.skill;
            skill.forEach(function(item,index){
                let num = index+1;
                let skillnm = item['name'];
                let pcnt = item['pcnt'];
                $(`.skillPCNT${num}`).find('strong').text(skillnm);
                $(`.skillPCNT${num}`).append(`${pcnt}%`);
                $(`.dPCNT${num}`).attr('data-percent',`${pcnt}`);
                $(`.skillNM${num}`).text(skillnm);
                $(`.skillNM${num}`).parent().parent().find('.progress').find('.active').width(`${pcnt}%`).attr('aria-valuenow',`${pcnt}%`);
            });
        },
        error: function(xhr, status, error) {
            Swal.fire({
                icon: "error",
                title: "讀取個人技能資訊錯誤...",
                text: `原因：${error}`,
            });
        }
    });    
};

function SetCwinHeight() {
    var iframeid = document.getElementById("msit-youtube"); //iframe id  
    if (document.getElementById) {
        if (iframeid && !window.opera) {
            if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
                iframeid.height = iframeid.contentDocument.body.offsetHeight;
            } else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
                iframeid.height = iframeid.Document.body.scrollHeight;
            }
        }
    }
}