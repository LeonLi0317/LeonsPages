$(document).ready(function(){
    getSkill();
    setiframe();
});

function setiframe(){
    $('#msit132-dialog, #PiCalculater-dialog').width($(window).width()*0.8);
    $('#msit132-body, #msit132-body').height($(window).height()*0.8);
}

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
