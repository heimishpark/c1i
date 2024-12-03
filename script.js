function showTeaInfo(teaType) {
    var teaDescription = document.getElementById('tea-description');
    var infoSection = document.getElementById('tea-info');

    // 티 종류에 따른 설명 변경
    if (teaType === 'England Black Tea') {
        teaDescription.textContent = 'One of the things that comes to mind when thinking of the UK is undoubtedly "Black Tea." The British consume about 2kg of tea per person annually, which means they drink tea as if it were water. Around the 17th century, Chinese black tea was introduced to the UK and was adapted to suit British tastes. This eventually came to be known as "English Tea.".';
    } else if (teaType === 'Matcha Tea') {
        teaDescription.textContent = 'Tea was introduced to Japan during the Nara period (710-793). It was also influenced by China, and most Japanese tea is considered to be green tea. Depending on cultivation methods, Japanese tea can be divided into two main types. Matcha, in particular, is known for its antioxidant properties, anti-aging effects, and potential role in cancer prevention.';
    }
    else if (teaType === 'Fu-erh tea') {
        teaDescription.textContent = 'Fu-erh tea, grown in Yunnan region, began appearing in records after the Qing Dynasty. During this period, drinking "Gongting tea in summer and Pu-erh tea in winter" became part of the imperial tea culture. Chinese medical texts also praised Pu-erh tea for aiding digestion, reducing fat, neutralizing toxins from meat, and benefiting the intestines. This made Pu-erh tea highly regarded and treated as a valuable beverage.';
    }
    

    // 정보 섹션 표시
    infoSection.style.display = 'block';

    // 스크롤을 정보 섹션으로 이동
    infoSection.scrollIntoView({ behavior: 'smooth' });
}
