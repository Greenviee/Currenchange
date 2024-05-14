const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

const year2 = currentDate.getFullYear();
const month2 = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//11시 이전 테스트시 null값 반환해서 전 날로 테스트
const day2 = (currentDate.getDate() - 1).toString().padStart(2, '0');
const yyyymmdd = year2 + month2 + day2;

var viewtime = document.getElementById('viewtime');
viewtime.textContent = '(조회시간 : ' + formattedDate + ')';

var apiUrl = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=RZuk2sK0yoZiufnYTZbZQvm8wxo5wJvY&searchdate=' + yyyymmdd + '&data=AP01';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var usdExchange = data.find(item => item.cur_unit === 'USD');
        var country1 = document.getElementById('country1');
        country1.textContent = `${usdExchange.cur_nm}`;
        var unit1 = document.getElementById('unit1');
        unit1.textContent = `(${usdExchange.cur_unit})`;
        var exchange1 = document.getElementById('exchange-rate1');
        exchange1.textContent = `${usdExchange.deal_bas_r}`;
        var diff1 = document.getElementById('diff1');
        diff1.textContent = `diff`;
        var buy1 = document.getElementById('buy1');
        buy1.textContent = `${usdExchange.ttb}`;
        var sell1 = document.getElementById('sell1');
        sell1.textContent = `${usdExchange.tts}`;
        var send1 = document.getElementById('send1');
        send1.textContent = `null`;
        var get1 = document.getElementById('get1');
        get1.textContent = `null`;

        var eurExchange = data.find(item => item.cur_unit === 'EUR');
        var country2 = document.getElementById('country2');
        country2.textContent = `${eurExchange.cur_nm}`;
        var unit2 = document.getElementById('unit2');
        unit2.textContent = `(${eurExchange.cur_unit})`;
        var exchange2 = document.getElementById('exchange-rate2');
        exchange2.textContent = `${eurExchange.deal_bas_r}`;
        var diff2 = document.getElementById('diff2');
        diff2.textContent = `diff`;
        var buy2 = document.getElementById('buy2');
        buy2.textContent = `${eurExchange.ttb}`;
        var sell2 = document.getElementById('sell2');
        sell2.textContent = `${eurExchange.tts}`;
        var send2 = document.getElementById('send2');
        send2.textContent = `null`;
        var get2 = document.getElementById('get2');
        get2.textContent = `null`;

        var jpyExchange = data.find(item => item.cur_unit === 'JPY(100)');
        var country3 = document.getElementById('country3');
        country3.textContent = `${jpyExchange.cur_nm}`;
        var unit3 = document.getElementById('unit3');
        unit3.textContent = `(${jpyExchange.cur_unit})`;
        var exchange3 = document.getElementById('exchange-rate3');
        exchange3.textContent = `${jpyExchange.deal_bas_r}`;
        var diff3 = document.getElementById('diff3');
        diff3.textContent = `diff`;
        var buy3 = document.getElementById('buy3');
        buy3.textContent = `${jpyExchange.ttb}`;
        var sell3 = document.getElementById('sell3');
        sell3.textContent = `${jpyExchange.tts}`;
        var send3 = document.getElementById('send3');
        send3.textContent = `null`;
        var get3 = document.getElementById('get3');
        get3.textContent = `null`;

        var cnhExchange = data.find(item => item.cur_unit === 'CNH');
        var country4 = document.getElementById('country4');
        country4.textContent = `${cnhExchange.cur_nm}`;
        var unit4 = document.getElementById('unit4');
        unit4.textContent = `(${cnhExchange.cur_unit})`;
        var exchange4 = document.getElementById('exchange-rate4');
        exchange4.textContent = `${cnhExchange.deal_bas_r}`;
        var diff4 = document.getElementById('diff4');
        diff4.textContent = `diff`;
        var buy4 = document.getElementById('buy4');
        buy4.textContent = `${cnhExchange.ttb}`;
        var sell4 = document.getElementById('sell4');
        sell4.textContent = `${cnhExchange.tts}`;
        var send4 = document.getElementById('send4');
        send4.textContent = `null`;
        var get4 = document.getElementById('get4');
        get4.textContent = `null`;

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function expand_search() {
    document.getElementById('expand-search').style.display = 'flex'
}

function close_search() {
    document.getElementById('expand-search').style.display = 'none'
}