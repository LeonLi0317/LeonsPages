//使用頻率%
var skillPCNT1,skillPCNT2,skillPCNT3,skillPCNT4,skillPCNT5,skillPCNT6,skillPCNT7,skillPCNT8;
skillPCNT1='80',skillPCNT2='75', skillPCNT3='85',skillPCNT4='80',skillPCNT5='90',skillPCNT6='100',skillPCNT7='80',skillPCNT8='80';
var skillNM1,skillNM2,skillNM3,skillNM4,skillNM5,skillNM6,skillNM7,skillNM8;
skillNM1='HTML',skillNM2='CSS',skillNM3='TypeScript',skillNM4='JavaScript',skillNM5='jQuery',skillNM6='SQL Server',skillNM7='C#',skillNM8='VB'
$('.skillPCNT1').find('strong').text(skillNM1);
$('.skillPCNT1').append(skillPCNT1+'%');
$('.dPCNT1').attr('data-percent',skillPCNT1);
$('.skillPCNT2').find('strong').text(skillNM2);
$('.skillPCNT2').append(skillPCNT2+'%');
$('.dPCNT2').attr('data-percent',skillPCNT2);
$('.skillPCNT3').find('strong').text(skillNM3);
$('.skillPCNT3').append(skillPCNT3+'%');
$('.dPCNT3').attr('data-percent',skillPCNT3);
$('.skillPCNT4').find('strong').text(skillNM4);
$('.skillPCNT4').append(skillPCNT4+'%');
$('.dPCNT4').attr('data-percent',skillPCNT4);
$('.skillPCNT5').find('strong').text(skillNM5);
$('.skillPCNT5').append(skillPCNT5+'%');
$('.dPCNT5').attr('data-percent',skillPCNT5);
$('.skillPCNT6').find('strong').text(skillNM6);
$('.skillPCNT6').append(skillPCNT6+'%');
$('.dPCNT6').attr('data-percent',skillPCNT6);
$('.skillPCNT7').find('strong').text(skillNM7);
$('.skillPCNT7').append(skillPCNT7+'%');
$('.dPCNT7').attr('data-percent',skillPCNT7);
$('.skillPCNT8').find('strong').text(skillNM8);
$('.skillPCNT8').append(skillPCNT8+'%');
$('.dPCNT8').attr('data-percent',skillPCNT8);

//技能名稱
$('.skillNM1').text(skillNM1);
$('.skillNM2').text(skillNM2);
$('.skillNM3').text(skillNM3);
$('.skillNM4').text(skillNM4);
$('.skillNM5').text(skillNM5);
$('.skillNM6').text(skillNM6);
$('.skillNM7').text(skillNM7);
$('.skillNM8').text(skillNM8);

$('.skillNM1').prev().addClass('AAA');