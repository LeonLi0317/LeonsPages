$(document).ready(function(){
    getSkill();
    setiframe();
    intro();
});

function setiframe(){
    $('#msit132-dialog, #PiCalculater-dialog').width($(window).width()*0.8);
    $('#msit132-body, #msit132-body').height($(window).height()*0.8);
}

function intro(){
    $('#intro').append(`
    <br>
    <p>我叫李振主，台北出生，是家中唯一的子女。性格開朗，喜歡與人交往，總是能夠帶給周遭的人歡樂，同時對於學習抱持著熱情。</p>
    <p>在義守大學資訊管理學系求學期間，我在義大遊樂世界打工兩年，這段經歷豐富了我的社會歷練。大學畢業後，我決定深造，成功通過校內碩士班面試。研究論文「以科技接受模式探討智慧型手機使用者對手機應用程式(App)之付費意願—以Google Play商店為例」深入了解了網路消費習慣，加深了對於資訊和科技未來發展的認識。</p>
    <p>畢業後，我加入台北SOGO忠孝館，擔任樓層管理人職位超過4年6個月。這段時間中，我不斷提升自己的活動企劃、基層管理和溝通協調能力。同時，我更深刻了解了消費者對資訊的依賴以及不同層面上的消費習慣。這段經歷也強化了我在與同儕和主管溝通方面的能力，培養了應變能力和找出解決方案的技巧。</p>
    <p>面對疫情的挑戰，我在百貨業達到了自己的里程碑，隨後果斷辭去工作，於2021年8月參加資展國際(原資策會)的微軟C#工程師就業養成班。這段時間裡，我深入學習了程式開發，與同學相互激勵、互相協助。我從T-SQL、C#程式語言的基礎，到ADO.NET、LINQ的CRUD存取技術，再到網頁設計HTML&amp;CSS.JavaScript.jQuery，最後到網站開發實務ASP.NET Core MVC.Restful Api和Ajax等課程，讓我對程式語言充滿熱情，並確定未來想朝程式設計方向發展。</p>
    <p>資策會畢業後，我很榮幸順利進入和潤企業擔任工程師。主要負責程式的前後端維運，以.NET、MVC結合Typescript為主，並應用.NET CORE API，同時也涉及VB.NET開發和維護。除此之外，還負責資料庫預存程序的開發及調整。現今，我仍然與潤企業保持密切合作，不僅在工作上持續學習新的框架，也積極參與思考公司內部缺乏的系統和需求，並以此為主題嘗試利用新框架進行開發和練習。</p>
    <p>作為一位工程師，我認為最具挑戰的地方包括不斷的Debug偵錯、學習新的應用和框架；然而，這也是最有趣且讓我沉浸其中的地方。每一次的Debug過程，每一個階段目標的完成，都讓我感到極大的成就感，期待迎接下一個挑戰。我明白軟體工程師的工作辛苦，但我充滿信心能夠克服每一個困難，為公司帶來更多價值和成長。感謝您撥冗閱讀我的自傳，期待有機會能為貴公司貢獻我的專業能力。</p>
    `);
};


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
