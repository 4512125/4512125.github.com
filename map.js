var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


var positions = [
    {
        title: '시민화장실',
        latlng: new daum.maps.LatLng(33.500042, 126.531944)
    },
    {
        title: '공항입구주차장',
        latlng: new daum.maps.LatLng(33.503306, 126.495685)
    },
    {
        title: '제일주차빌딩',
        latlng: new daum.maps.LatLng(33.451393, 126.570738)
    },
    {
        title: '인제공영주차장',
        latlng: new daum.maps.LatLng(33.504827, 126.541996)
    },
    {
        title: '법원북측 공영주차장',
        latlng: new daum.maps.LatLng(33.494713, 126.535350)
    },
    {
        title: '모충사',
        latlng: new daum.maps.LatLng(33.516430, 126.547003)
    },
    {
        title: '충혼묘지 입구 (천왕사입구)',
        latlng: new daum.maps.LatLng(33.516430, 126.547003)
    },
    {
        title: '충혼묘지',
        latlng: new daum.maps.LatLng(33.412640, 126.547003)
    },
    {
        title: '묘지관리사무소 (충혼각 절)',
        latlng: new daum.maps.LatLng(33.418898, 126.493132)
    },
    {
        title: '노형신비의도로',
        latlng: new daum.maps.LatLng(33.449879, 126.487336)
    },
    {
        title: '관음사신비의도로',
        latlng: new daum.maps.LatLng(33.435870, 126.554983)
    },
    {
        title: '새별오름',
        latlng: new daum.maps.LatLng(33.365380, 126.361954)
    },
    {
        title: '새별오름',
        latlng: new daum.maps.LatLng(33.365380, 126.361954)
    },
    {
        title: '새별오름',
        latlng: new daum.maps.LatLng(33.365380, 126.361954)
    },
    {
        title: '실내수영장',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '실내체육관',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '애향운동장',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '야구장',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '연정정구장',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '주경기장',
        latlng: new daum.maps.LatLng(33.497505, 126.515547)
    },
    {
        title: '회천 파크골프장',
        latlng: new daum.maps.LatLng(33.471863, 126.636599)
    },
    {
        title: '미리내공원1',
        latlng: new daum.maps.LatLng(33.459055, 126.478797)
    },
    {
        title: '미리내공원2',
        latlng: new daum.maps.LatLng(33.459055, 126.478797)
    },
    {
        title: '칠성로 차없는거리',
        latlng: new daum.maps.LatLng(33.516536, 126.525281)
    },
    {
        title: '노형신비의도로 (소정도채비옆)',
        latlng: new daum.maps.LatLng(33.451863, 126.487223)
    },
    {
        title: '용담공원(용연)',
        latlng: new daum.maps.LatLng(33.512867, 126.515090)
    },
    {
        title: '삼무공원',
        latlng: new daum.maps.LatLng(33.491505, 126.492015)
    },
    {
        title: '탑동1공원(서측)',
        latlng: new daum.maps.LatLng(33.518675, 126.520255)
    },
    {
        title: '탑동1공원(동측)',
        latlng: new daum.maps.LatLng(33.518179, 126.524185)
    },
    {
        title: '이도공원',
        latlng: new daum.maps.LatLng(33.497316, 126.544174)
    },
    {
        title: '수운공원',
        latlng: new daum.maps.LatLng(33.500283, 126.540042)
    },
    {
        title: '39호어린이공원',
        latlng: new daum.maps.LatLng(33.500147, 126.538051)
    },
    {
        title: '40호어린이공원',
        latlng: new daum.maps.LatLng(33.497528, 126.540823)
    },
    {
        title: '41호어린이공원',
        latlng: new daum.maps.LatLng(33.502267, 126.544827)
    },
    {
        title: '42호어린이공원',
        latlng: new daum.maps.LatLng(33.500072, 126.547273)
    },
    {
        title: '남조봉공원(민오름)',
        latlng: new daum.maps.LatLng(33.486239, 126.492702)
    },
    {
        title: '신산공원(동쪽)',
        latlng: new daum.maps.LatLng(33.505257, 126.532470)
    },
    {
        title: '신산공원(게이트볼장)',
        latlng: new daum.maps.LatLng(33.507551, 126.532116)
    },
    {
        title: '사라봉공원(서측)',
        latlng: new daum.maps.LatLng(33.518083, 126.546054)
    },
    {
        title: '사라봉공원(정상)',
        latlng: new daum.maps.LatLng(33.518083, 126.546054)
    },
    {
        title: '사라봉공원(동축)',
        latlng: new daum.maps.LatLng(33.518083, 126.546054)
    },
    {
        title: '노형근린공원',
        latlng: new daum.maps.LatLng(33.480139, 126.482536)
    },
    {
        title: '연동공원',
        latlng: new daum.maps.LatLng(33.482368, 126.488373)
    },
    {
        title: '노형제1공원',
        latlng: new daum.maps.LatLng(33.486646, 126.469511)
    },
    {
        title: '노형제2공원',
        latlng: new daum.maps.LatLng(33.489457, 126.471923)
    },
    {
        title: '시민복지타운공원',
        latlng: new daum.maps.LatLng(33.489403, 126.526308)
    },
    {
        title: '원당봉공원',
        latlng: new daum.maps.LatLng(33.526296, 126.598385)
    },
    {
        title: '한마음공원',
        latlng: new daum.maps.LatLng(33.496420, 126.546213)
    },
    {
    title: '노형제1공원',
    latlng: new daum.maps.LatLng(33.486646, 126.469511)
},
{
    title: '삼화근린공원',
    latlng: new daum.maps.LatLng(33.51302952298847, 126.5837386661075)
},
{
    title: '절물자연휴양림',
    latlng: new daum.maps.LatLng(33.51302952298847, 126.5837386661075)
},
{
    title: '절물자연휴양림',
    latlng: new daum.maps.LatLng(33.44489781951516, 126.62568092443117)
},
{
    title: '절물자연휴양림',
    latlng: new daum.maps.LatLng(33.430236185392566, 126.62279756784002)
},
{
    title: '노루생태관찰원',
    latlng: new daum.maps.LatLng(33.430236185392566, 126.62279756784002)
},
{
    title: '노루생태관찰원',
    latlng: new daum.maps.LatLng(33.511366382635956, 126.51792486997464)
},
{
    title: '동문공설시장',
    latlng: new daum.maps.LatLng(33.511366382635956, 126.51792486997464)
},
{
    title: '서문공설시장',
    latlng: new daum.maps.LatLng(33.51221014712997, 126.52819671816867)
},
{
    title: '오일시장A (대장간옆)',
    latlng: new daum.maps.LatLng(33.51221014712997, 126.52819671816867)
},
{
    title: '오일시장B (문화광장)',
    latlng: new daum.maps.LatLng(33.51409931459432, 126.52615866746446)
},
{
    title: '오일시장C (주차장P3)',
    latlng: new daum.maps.LatLng(33.51409931459432, 126.52615866746446)
},
{
    title: '오일시장D (농협옆)',
    latlng: new daum.maps.LatLng(33.510969042978154, 126.52335155512873)
},
{
    title: '제주시활성화구역내',
    latlng: new daum.maps.LatLng(33.51203949460206, 126.52506345972351)
},
{
    title: '중앙로상점가주차장 한짓골',
    latlng: new daum.maps.LatLng(33.5052335430027, 126.53245334268509)
},
{
    title: '동문수산시장',
    latlng: new daum.maps.LatLng(33.5052335430027, 126.53245334268509)
},
{
    title: '신산공원(서쪽)',
    latlng: new daum.maps.LatLng(33.49169863909714, 126.52294066166867)
},
{
    title: '시민복지타운광장',
    latlng: new daum.maps.LatLng(33.44254391006033, 126.28952280751675)
},
{
    title: '궤물동산',
    latlng: new daum.maps.LatLng(33.44567501398218, 126.29408304838307)
},
{
    title: '동방파제',
    latlng: new daum.maps.LatLng(33.44567501398218, 126.29408304838307)
},
{
    title: '귀덕2리방파제',
    latlng: new daum.maps.LatLng(33.416780183693405, 126.29648865401111)
},
{
    title: '귀덕3리게이트볼장',
    latlng: new daum.maps.LatLng(33.44270040635187, 126.27852639822278)
},
{
    title: '한림오일시장1',
    latlng: new daum.maps.LatLng(33.41989009562017, 126.27478439730946)
},
{
    title: '한림오일시장2',
    latlng: new daum.maps.LatLng(33.41989009562017, 126.27478439730946)
},
{
    title: '(구)수원게이트볼장',
    latlng: new daum.maps.LatLng(33.420721319080684, 126.273852855998)
},
{
    title: '한림항비양도선대합실',
    latlng: new daum.maps.LatLng(33.41924123504459, 126.26259778261702)
},
{
    title: '금능해변',
    latlng: new daum.maps.LatLng(33.425565995633065, 126.26429045137864)
},
{
    title: '협재해변',
    latlng: new daum.maps.LatLng(33.39356187288618, 126.23953852425899)
},
{
    title: '비양봉',
    latlng: new daum.maps.LatLng(33.39007390735139, 126.23591467802844)
},
{
    title: '재암천(동굴)',
    latlng: new daum.maps.LatLng(33.41190059056881, 126.22793172056771)
},
{
    title: '느지리오름입구',
    latlng: new daum.maps.LatLng(33.39113784262451, 126.23885887493718)
},
{
    title: '월령리 주차장',
    latlng: new daum.maps.LatLng(33.365588004338385, 126.26115105826499)
},
{
    title: '한림매일시장',
    latlng: new daum.maps.LatLng(33.41616836305718, 126.26376765713493)
},
{
    title: '고내봉산책로',
    latlng: new daum.maps.LatLng(33.376314383088236, 126.21433669782685)
},
{
    title: '다락쉼터',
    latlng: new daum.maps.LatLng(33.45169524589095, 126.30709128667607)
},
{
    title: '곽지과물해변통시',
    latlng: new daum.maps.LatLng(33.46016901244463, 126.34128526657425)
},
{
    title: '곽지해수욕장',
    latlng: new daum.maps.LatLng(33.449951310179856, 126.30414533732778)
},
{
    title: '곽지해수욕장서측주차장',
    latlng: new daum.maps.LatLng(33.4701495755157, 126.34094727852934)
},
{
    title: '애월읍공설묘지',
    latlng: new daum.maps.LatLng(33.470057306490105, 126.4260887374802)
},
{
    title: '광령저수지 남쪽',
    latlng: new daum.maps.LatLng(33.45027273199581, 126.30486982133465)
},
{
    title: '삼밭알',
    latlng: new daum.maps.LatLng(33.43531414043925, 126.32986378384625)
},
{
    title: '납읍난대림',
    latlng: new daum.maps.LatLng(33.3912711336245, 126.3977078118672)
},
{
    title: '선운정사내',
    latlng: new daum.maps.LatLng(33.41915386845531, 126.44686023012952)
},
{
    title: '큰노꼬메오름주차장',
    latlng: new daum.maps.LatLng(33.48430486682141, 126.38089105072355)
},
{
    title: '애월읍충혼묘지',
    latlng: new daum.maps.LatLng(33.47487472490497, 126.38605756075215)
},
{
    title: '수산봉정상',
    latlng: new daum.maps.LatLng(33.42935029727754, 126.3070882530635)
},
{
    title: '신엄농산물직거래장터',
    latlng: new daum.maps.LatLng(33.4692730864642, 126.36019276731088)
},
{
    title: '남또르쉼터',
    latlng: new daum.maps.LatLng(33.47701657768879, 126.35475658366919)
},
{
    title: '한담공원',
    latlng: new daum.maps.LatLng(33.45991780599961, 126.31099283519693)
},
{
    title: '바리메오름주차장',
    latlng: new daum.maps.LatLng(33.37768444398114, 126.38711534498114)
},
{
    title: '족은노꼬메오름주차장',
    latlng: new daum.maps.LatLng(33.39743363521655, 126.4248983774596)
},
{
    title: '궤물오름주차장',
    latlng: new daum.maps.LatLng(33.39965062114983, 126.40782719135805)
},
{
    title: '궤물오름주차장',
    latlng: new daum.maps.LatLng(33.45509559442525, 126.34687363576354)
},
{
    title: '중엄소공원',
    latlng: new daum.maps.LatLng(33.47788889914688, 126.36939049261706)
},
{
    title: '서동항포구',
    latlng: new daum.maps.LatLng(33.52476695800896, 126.86201359521729)
},
{
    title: '창흥동해수욕장',
    latlng: new daum.maps.LatLng(33.51875146303714, 126.88302148408201)
},
{
    title: '면수동해녀탈의장',
    latlng: new daum.maps.LatLng(33.46608563628421, 126.77690775304742)
},
{
    title: '서문동해녀탈의장',
    latlng: new daum.maps.LatLng(33.51959734617034, 126.90192635773754)
},
{
    title: '신동해녀탈의장',
    latlng: new daum.maps.LatLng(33.54212209570768, 126.71335627566691)
},
{
    title: '체험어장',
    latlng: new daum.maps.LatLng(33.52221088444586, 126.86608659332819)
},
{
    title: '양식단지앞',
    latlng: new daum.maps.LatLng(33.526362651612594, 126.88481543582975)
},
{
    title: '세화리해수욕장',
    latlng: new daum.maps.LatLng(33.445668203388244, 126.75696451955636)
},
{
    title: '해녀박물관축구장옆주차장',
    latlng: new daum.maps.LatLng(33.556177699127346, 126.69441319747472)
},
{
    title: '당오름',
    latlng: new daum.maps.LatLng(33.49889722818037, 126.9027847991575)
},
{
    title: '새미오름주차장',
    latlng: new daum.maps.LatLng(33.53280747817935, 126.6139986235727)
},
{
    title: '동복마을운동장',
    latlng: new daum.maps.LatLng(33.42288330435476, 126.67528215387793)
},
{
    title: '지미봉주차장',
    latlng: new daum.maps.LatLng(33.537780342575985, 126.61972569177709)
},
{
    title: '별방진',
    latlng: new daum.maps.LatLng(33.51663341832206, 126.71703112198055)
},
{
    title: '교래마을운동장',
    latlng: new daum.maps.LatLng(33.54148980810725, 126.63480866854293)
},
{
    title: '다려도',
    latlng: new daum.maps.LatLng(33.53611623340241, 126.61223982200521)
},
{
    title: '동백동산(북)',
    latlng: new daum.maps.LatLng(33.53782490205166, 126.62487606783675)
},
{
    title: '남생이못',
    latlng: new daum.maps.LatLng(33.553252514586966, 126.644291163661)
},
{
    title: '닭머루',
    latlng: new daum.maps.LatLng(33.542725774479685, 126.6690894769526)
},
{
    title: '신촌어촌정주어항',
    latlng: new daum.maps.LatLng(33.552057455324366, 126.64887031646954)
},
{
    title: '동동포구',
    latlng: new daum.maps.LatLng(33.545644938994684, 126.66167910801653)
},
{
    title: '연북정',
    latlng: new daum.maps.LatLng(33.544332921608266, 126.67404051233454)
},
{
    title: '소금밭',
    latlng: new daum.maps.LatLng(33.54319338201188, 126.66998350351587)
},
{
    title: '관곳',
    latlng: new daum.maps.LatLng(33.550913788843786, 126.69351430557768)
},
{
    title: '서우봉해변야영장',
    latlng: new daum.maps.LatLng(33.54017308829005, 126.66797517640273)
},
{
    title: '서우봉해변관리사무소',
    latlng: new daum.maps.LatLng(33.30284029428064, 126.16597986657779)
},
{
    title: '서우봉해변(관리사무소동쪽)',
    latlng: new daum.maps.LatLng(33.30924112015322, 126.16536915920568)
},
{
    title: '서우봉해변(관리사무소앞)',
    latlng: new daum.maps.LatLng(33.29450154153945, 126.1637145045413)
},
{
    title: '함덕오일시장',
    latlng: new daum.maps.LatLng(33.34281225922916, 126.17446316490347)
},
{
    title: '함덕어촌정주어항',
    latlng: new daum.maps.LatLng(33.28557944710155, 126.16319417306751)
},
{
    title: '북촌어촌정주어항',
    latlng: new daum.maps.LatLng(33.32286205666598, 126.16693186082558)
},
{
    title: '자구네포구',
    latlng: new daum.maps.LatLng(33.33077689218998, 126.25473442066523)
},
{
    title: '고산엉알',
    latlng: new daum.maps.LatLng(33.32790255672515, 126.22641370159629)
},
{
    title: '한장동',
    latlng: new daum.maps.LatLng(33.334577356021306, 126.27596047270028)
},
{
    title: '차귀섬',
    latlng: new daum.maps.LatLng(33.33662713318612, 126.16525842392981)
},
{
    title: '고산수월봉',
    latlng: new daum.maps.LatLng(33.44489781951516, 126.62568092443117)
},
{
    title: '낙천테마마을',
    latlng: new daum.maps.LatLng(33.33500107901164, 126.24773831300479)
},
{
    title: '신창싱게물',
    latlng: new daum.maps.LatLng(33.32560363642965, 126.18169221747458)
},
{
    title: '용당포구',
    latlng: new daum.maps.LatLng(33.3369906495576, 126.22179629983115)
},
{
    title: '용수절부암',
    latlng: new daum.maps.LatLng(33.96122028083367, 126.28663772614395)
},
{
    title: '저지오름',
    latlng: new daum.maps.LatLng(33.35687237877533, 126.18247836263853)
},
{
    title: '저지오름주차장',
    latlng: new daum.maps.LatLng(34.00816159169751, 126.34056545518229)
},
{
    title: '문도지오름',
    latlng: new daum.maps.LatLng(33.962950906951896, 126.29914335670026)
},
{
    title: '조수돗곳물',
    latlng: new daum.maps.LatLng(33.96464103498483, 126.28577823197803)
},
{
    title: '두모리포구',
    latlng: new daum.maps.LatLng(34.00911124520398, 126.3401294370791)
},
{
    title: '용수충혼묘지',
    latlng: new daum.maps.LatLng(33.963951835862495, 126.2900641504851)
},
{
    title: '팔각정 공원',
    latlng: new daum.maps.LatLng(33.96235145249127, 126.29772879216397)
},
{
    title: '목게1',
    latlng: new daum.maps.LatLng(33.95800325533411, 126.29848288116897)
},
{
    title: '메지박',
    latlng: new daum.maps.LatLng(34.0091426233025, 126.34060117229842)
},
{
    title: '이호비치',
    latlng: new daum.maps.LatLng(33.52149337617372, 126.56476606005616)
},
{
    title: '현사어촌정주어항',
    latlng: new daum.maps.LatLng(33.524547238359844, 126.56558609386427)
},
{
    title: '백포어촌정주어항',
    latlng: new daum.maps.LatLng(33.55627592768877, 126.76217735103305)
},
{
    title: '산지천',
    latlng: new daum.maps.LatLng(33.55627592768877, 126.76217735103305)
},
{
    title: '일도1동동사무소앞',
    latlng: new daum.maps.LatLng(33.52520440981584, 126.56479052988504)
},
{
    title: '기상청 인근 화장실',
    latlng: new daum.maps.LatLng(33.47487472490497, 126.38605756075215)
},
{
    title: '그린공원배드민턴장',
    latlng: new daum.maps.LatLng(33.5570252239097, 126.75987941490082)
},
{
    title: '그린공원내',
    latlng: new daum.maps.LatLng(33.430236185392566, 126.62279756784002)
},
{
    title: '화북망동산',
    latlng: new daum.maps.LatLng(33.51875146303714, 126.88302148408201)
},
{
    title: '별도봉산책로',
    latlng: new daum.maps.LatLng(33.50713943837155, 126.46848446093064)
},
{
    title: '해신사',
    latlng: new daum.maps.LatLng(33.54319338201188, 126.66998350351587)
},
{
    title: '화북해안포구',
    latlng: new daum.maps.LatLng(33.504254320835585, 126.54649661387502)
},
{
    title: '서귀포시 자기주도학습지원센터',
    latlng: new daum.maps.LatLng(33.30050356877652, 126.58195085069386)
},
{
    title: '서귀포시평생학습관',
    latlng: new daum.maps.LatLng(33.30050356877652, 126.58195085069386)
},
{
    title: '돈내코산책로 화장실',
    latlng: new daum.maps.LatLng(33.25129638714226, 126.57032117271562)
},
{
    title: '돈내코운동장 화장실',
    latlng: new daum.maps.LatLng(33.26876038272497, 126.58664440561532)
},
{
    title: '돈내코야영장 화장실',
    latlng: new daum.maps.LatLng(33.26876038272497, 126.58664440561532)
},
{
    title: '돈내코사무실 화장실 760-2651',
    latlng: new daum.maps.LatLng(33.26876038272497, 126.58664440561532)
},
{
    title: '영천동주민센터 외부화장실',
    latlng: new daum.maps.LatLng(33.26876038272497, 126.58664440561532)
},
{
    title: '영천동주민센터',
    latlng: new daum.maps.LatLng(33.384459148168055, 126.80138399943577)
},
{
    title: '서귀포김정희유배지',
    latlng: new daum.maps.LatLng(33.249976596946496, 126.27822130662788)
},
{
    title: '혼인지',
    latlng: new daum.maps.LatLng(33.3846366481305, 126.80187367688997)
},
{
    title: '성읍민속남문상가-1',
    latlng: new daum.maps.LatLng(33.414842000211955, 126.89407983273185)
},
{
    title: '성읍민속남문상가-2',
    latlng: new daum.maps.LatLng(33.251691482369175, 126.56673508794499)
},
{
    title: '서복전시관',
    latlng: new daum.maps.LatLng(33.2448094133504, 126.57065765137189)
},
{
    title: '서복전시관-주차장',
    latlng: new daum.maps.LatLng(33.25141739335895, 126.5076218419502)
},
{
    title: '서귀포시민회관',
    latlng: new daum.maps.LatLng(33.25141739335895, 126.5076218419502)
},
{
    title: '기당미술관',
    latlng: new daum.maps.LatLng(33.24524050744649, 126.57121351436403)
},
{
    title: '김정문화회관',
    latlng: new daum.maps.LatLng(33.24512325088556, 126.56445406825807)
},
{
    title: '이중섭미술관',
    latlng: new daum.maps.LatLng(33.244325601193765, 126.55209696595237)
},
{
    title: '창작스튜디오',
    latlng: new daum.maps.LatLng(33.29638826500534, 126.59052959534665)
},
{
    title: '소암기념관',
    latlng: new daum.maps.LatLng(33.245860456252636, 126.56487533083285)
},
{
    title: '한란전시관',
    latlng: new daum.maps.LatLng(33.25557994861981, 126.51052602926833)
},
{
    title: '서귀포시 제1청사-본관',
    latlng: new daum.maps.LatLng(33.24512278183551, 126.56741989432041)
},
{
    title: '서귀포시 제2청사',
    latlng: new daum.maps.LatLng(33.44655575440212, 126.91574927793381)
},
{
    title: '동부보건소',
    latlng: new daum.maps.LatLng(33.25391330653037, 126.55960715112008)
},
{
    title: '성산보건지소',
    latlng: new daum.maps.LatLng(33.27562881836351, 126.70342326443738)
},
{
    title: '표선보건지소',
    latlng: new daum.maps.LatLng(33.287953369353815, 126.62624074503745)
},
{
    title: '신례보건진료소',
    latlng: new daum.maps.LatLng(33.310165049607065, 126.71272166099415)
},
{
    title: '한남보건진료소',
    latlng: new daum.maps.LatLng(33.331129496364476, 126.83026471579454)
},
{
    title: '의귀보건진료소',
    latlng: new daum.maps.LatLng(33.311643800475196, 126.69755849224646)
},
{
    title: '신흥보건진료소',
    latlng: new daum.maps.LatLng(33.33178851599988, 126.79825985036916)
},
{
    title: '토산보건진료소',
    latlng: new daum.maps.LatLng(33.319841948610474, 126.74790659211607)
},
{
    title: '세화보건진료소',
    latlng: new daum.maps.LatLng(33.3904612619064, 126.80197224436289)
},
{
    title: '성읍보건진료소',
    latlng: new daum.maps.LatLng(33.38223488759945, 126.87734958936026)
},
{
    title: '가시보건진료소',
    latlng: new daum.maps.LatLng(33.354102014722734, 126.77125906467815)
},
{
    title: '신충보건진료소',
    latlng: new daum.maps.LatLng(33.24621974333922, 126.50927769923653)
},
{
    title: '신산보건진료소',
    latlng: new daum.maps.LatLng(33.361211939797975, 126.83884922880488)
},
{
    title: '삼달보건진료소',
    latlng: new daum.maps.LatLng(33.25717650880446, 126.56350139589203)
},
{
    title: '제주월드컵경기장 1층 화장실',
    latlng: new daum.maps.LatLng(33.37426663339275, 126.846764396117)
},
{
    title: '올림픽기념국민생활관',
    latlng: new daum.maps.LatLng(33.44602761819394, 126.88271910955632)
},
{
    title: '동홍생활체육관',
    latlng: new daum.maps.LatLng(33.26118027549437, 126.49950940648584)
},
{
    title: '난산보건진료소',
    latlng: new daum.maps.LatLng(33.401044429031096, 126.87195275601356)
},
{
    title: '수산보건진료소',
    latlng: new daum.maps.LatLng(33.24759801426018, 126.50760033808214)
},
{
    title: '서귀포예술의전당 화장실',
    latlng: new daum.maps.LatLng(33.27508941508656, 126.64109115740163)
},
{
    title: '제주월드컵경기장 입구(광장)화장실',
    latlng: new daum.maps.LatLng(33.24633332840763, 126.55079050205464)
},
{
    title: '효돈생활체육관',
    latlng: new daum.maps.LatLng(33.26302966080712, 126.61706554570233)
},
{
    title: '공천포전지훈련센터',
    latlng: new daum.maps.LatLng(33.249195827795205, 126.55450154896221)
},
{
    title: '서귀포축구공원',
    latlng: new daum.maps.LatLng(33.25836365134925, 126.61036777724793)
},
{
    title: '서귀포시시민축구장',
    latlng: new daum.maps.LatLng(33.25987300003709, 126.50177486365818)
},
{
    title: '걸매축구장',
    latlng: new daum.maps.LatLng(33.25987300003709, 126.50177486365818)
},
{
    title: '강창학종합경기장',
    latlng: new daum.maps.LatLng(33.26234314182843, 126.58953371994556)
},
{
    title: '강창학종합경기장-인라인경기장',
    latlng: new daum.maps.LatLng(33.32847026333096, 126.71367550297433)
},
{
    title: '중문단지축구장',
    latlng: new daum.maps.LatLng(33.234137435155354, 126.43362143316561)
},
{
    title: '국민체육센터',
    latlng: new daum.maps.LatLng(33.241537449474784, 126.56111558619095)
},
{
    title: '수망리꽃동산',
    latlng: new daum.maps.LatLng(33.250905591368614, 126.43238011237018)
},
{
    title: '산호다방(연주반점)',
    latlng: new daum.maps.LatLng(33.246884132413115, 126.56368132987134)
},
{
    title: '서귀어촌계',
    latlng: new daum.maps.LatLng(33.24005605029106, 126.56444486224095)
},
{
    title: '보목동어촌계',
    latlng: new daum.maps.LatLng(33.250400463500476, 126.56470260076992)
},
{
    title: '대원목욕탕',
    latlng: new daum.maps.LatLng(33.239205451465324, 126.6068305068086)
},
{
    title: '청수빌딩(정원다방, 채플린)',
    latlng: new daum.maps.LatLng(33.250954867099345, 126.51013545834537)
},
{
    title: '불교문화센터(청소년문화의 집 앞 용왕식당)',
    latlng: new daum.maps.LatLng(33.248299390403986, 126.5661723752672)
},
{
    title: '서귀북초등학교야외',
    latlng: new daum.maps.LatLng(33.249679152689495, 126.56059844877795)
},
{
    title: '민우상가(구월드컵PC촌)',
    latlng: new daum.maps.LatLng(33.25970262115217, 126.55883115964771)
},
{
    title: '삼주상가(식육점)',
    latlng: new daum.maps.LatLng(33.2491003784212, 126.57042634941463)
},
{
    title: '스타트 단란주점',
    latlng: new daum.maps.LatLng(33.250799157475605, 126.51089177877259)
},
{
    title: '고향순대(천지동)(폭포수노래방)',
    latlng: new daum.maps.LatLng(33.250799157475605, 126.51089177877259)
},
{
    title: '불소식당(구신신낚시)',
    latlng: new daum.maps.LatLng(33.24959002953671, 126.5097353066393)
},
{
    title: '토평공원 화장실',
    latlng: new daum.maps.LatLng(33.259173756007506, 126.5128026088471)
},
{
    title: '문화공원 화장실',
    latlng: new daum.maps.LatLng(33.25757450725544, 126.57638605581043)
},
{
    title: '미래1공원',
    latlng: new daum.maps.LatLng(33.25041519355034, 126.55460267020986)
},
{
    title: '삼매봉공원 화장실',
    latlng: new daum.maps.LatLng(33.24348457126174, 126.55794694881494)
},
{
    title: '걸매공원 화장실',
    latlng: new daum.maps.LatLng(33.25975307682049, 126.50879852503405)
},
{
    title: '대청공원 화장실',
    latlng: new daum.maps.LatLng(33.25350657060888, 126.42079944100877)
},
{
    title: '문화1공원 화장실',
    latlng: new daum.maps.LatLng(33.24667838853664, 126.55347132919323)
},
{
    title: '동광공원 화장실',
    latlng: new daum.maps.LatLng(33.25347982141203, 126.55535547655377)
},
{
    title: '칠십리시공원 화장실(A)',
    latlng: new daum.maps.LatLng(33.47292655171585, 126.93450775819647)
},
{
    title: '칠십리시공원 화장실(B)',
    latlng: new daum.maps.LatLng(33.234658267490666, 126.48717644986976)
},
{
    title: '서귀포보건소',
    latlng: new daum.maps.LatLng(33.24518083064068, 126.5769566081882)
},
{
    title: '중문보건지소',
    latlng: new daum.maps.LatLng(33.23699737112245, 126.33523460101696)
},
{
    title: '강정체육공원 공중화장실',
    latlng: new daum.maps.LatLng(33.24016843655688, 126.53184357509525)
},
{
    title: '성산포항종합여객터미널',
    latlng: new daum.maps.LatLng(33.248963604891536, 126.56428479029354)
},
{
    title: '화순항종합관리센터',
    latlng: new daum.maps.LatLng(33.47458275083249, 126.88589529377305)
},
{
    title: '구)6코스 안내소',
    latlng: new daum.maps.LatLng(33.25019833275167, 126.56362622993309)
},
{
    title: '매일시장',
    latlng: new daum.maps.LatLng(33.266522509050354, 126.57329045147793)
},
{
    title: '매일시장주차장',
    latlng: new daum.maps.LatLng(33.266522509050354, 126.57329045147793)
},
{
    title: '돔베낭골',
    latlng: new daum.maps.LatLng(33.24338619740863, 126.45912040897154)
},
{
    title: '월평체육공원',
    latlng: new daum.maps.LatLng(33.266522509050354, 126.57329045147793)
},
{
    title: '1코스 안내소',
    latlng: new daum.maps.LatLng(33.266522509050354, 126.57329045147793)
},
{
    title: '5코스 안내소',
    latlng: new daum.maps.LatLng(33.244325601193765, 126.55209696595237)
},
{
    title: '서귀포오일시장-사무실',
    latlng: new daum.maps.LatLng(33.27776552960593, 126.71967627875118)
},
{
    title: '서귀포오일시장-3',
    latlng: new daum.maps.LatLng(33.25058190612827, 126.42394782508833)
},
{
    title: '서귀포오일시장-2',
    latlng: new daum.maps.LatLng(33.24638776607117, 126.5559064470525)
},
{
    title: '서귀포오일시장-1',
    latlng: new daum.maps.LatLng(33.26175816307052, 126.60831787394052)
},
{
    title: '중문오일시장',
    latlng: new daum.maps.LatLng(33.25431389601182, 126.56998875696355)
},
{
    title: '삼매봉도서관',
    latlng: new daum.maps.LatLng(33.2447205092909, 126.55967042514486)
},
{
    title: '중앙도서관',
    latlng: new daum.maps.LatLng(33.25267658457861, 126.41837541561675)
},
{
    title: '동부도서관',
    latlng: new daum.maps.LatLng(33.23799399299591, 126.42601744245376)
},
{
    title: '서부도서관',
    latlng: new daum.maps.LatLng(33.233531467603726, 126.31135322920132)
},
{
    title: '기적의도서관',
    latlng: new daum.maps.LatLng(33.233531467603726, 126.31135322920132)
},
{
    title: '천지연산책로(폭포안)',
    latlng: new daum.maps.LatLng(33.233531467603726, 126.31135322920132)
},
{
    title: '천지연매표소',
    latlng: new daum.maps.LatLng(33.24460546520859, 126.57322529493347)
},
{
    title: '천지연주차장',
    latlng: new daum.maps.LatLng(33.2516042176974, 126.5593483135786)
},
{
    title: '주상절리대 화장실',
    latlng: new daum.maps.LatLng(33.27129327655778, 126.60700876614851)
},
{
    title: '천제연',
    latlng: new daum.maps.LatLng(33.27129327655778, 126.60700876614851)
},
{
    title: '정방폭포',
    latlng: new daum.maps.LatLng(33.27129327655778, 126.60700876614851)
},
{
    title: '감귤박물관 뮤지엄숍 화장실',
    latlng: new daum.maps.LatLng(33.27129327655778, 126.60700876614851)
},
{
    title: '감귤박물관 화장실',
    latlng: new daum.maps.LatLng(33.27129327655778, 126.60700876614851)
},
{
    title: '하용머리',
    latlng: new daum.maps.LatLng(33.24777880194587, 126.5658144021215)
},
{
    title: '산방산화장실',
    latlng: new daum.maps.LatLng(33.24998484484115, 126.56239968978237)
},
{
    title: '중앙공영주차빌딩',
    latlng: new daum.maps.LatLng(33.25375496061336, 126.26082745913556)
},
{
    title: '감귤체험학습장 화장실',
    latlng: new daum.maps.LatLng(33.25171201065769, 126.56025346802414)
},
{
    title: '감귤박물관 족욕체험장 화장실',
    latlng: new daum.maps.LatLng(33.27303575882105, 126.23649352001765)
},
{
    title: '감귤박물관 야외화장실',
    latlng: new daum.maps.LatLng(33.211652531814146, 126.25707574250384)
},
{
    title: '하용머리-주차장',
    latlng: new daum.maps.LatLng(33.27920321744269, 126.191511292948)
},
{
    title: '천지공영주차빌딩',
    latlng: new daum.maps.LatLng(33.28061604386017, 126.22246440117762)
},
{
    title: '중앙로터리 공영주차빌딩',
    latlng: new daum.maps.LatLng(33.27441954002622, 126.23573012958141)
},
{
    title: '정방공영 주차빌딩',
    latlng: new daum.maps.LatLng(33.26613975811097, 126.25724580743126)
},
{
    title: '바다낚시편의점',
    latlng: new daum.maps.LatLng(33.26513458688428, 126.64080560581247)
},
{
    title: '정난주마리아묘?',
    latlng: new daum.maps.LatLng(33.27075561952084, 126.17591896293446)
},
{
    title: '평지교회',
    latlng: new daum.maps.LatLng(33.27651721810996, 126.71315393719598)
},
{
    title: '생태문화체험골',
    latlng: new daum.maps.LatLng(33.48187029902368, 126.90149978345221)
},
{
    title: '옵데강편의음식점',
    latlng: new daum.maps.LatLng(33.273796837049105, 126.6571927570242)
},
{
    title: '산경도예',
    latlng: new daum.maps.LatLng(33.35099304038401, 126.86461322341732)
},
{
    title: '노을과어울림(구 도원횟집)',
    latlng: new daum.maps.LatLng(33.27484576503007, 126.66225504422289)
},
{
    title: '안덕면사무소',
    latlng: new daum.maps.LatLng(33.408120991365095, 126.90017266074317)
},
{
    title: '안덕면주민자치센터',
    latlng: new daum.maps.LatLng(33.256594359212826, 126.40188735997546)
},
{
    title: '안덕체육관(본관)',
    latlng: new daum.maps.LatLng(33.2458612518771, 126.56510280876029)
},
{
    title: '안덕체육관(야외)',
    latlng: new daum.maps.LatLng(33.24725963986874, 126.5721093050848)
},
{
    title: '안덕계곡',
    latlng: new daum.maps.LatLng(33.244204909484715, 126.56175035231884)
},
{
    title: '안덕산방도서관',
    latlng: new daum.maps.LatLng(33.27843483992387, 126.50518597722444)
},
{
    title: '화순금모래해변',
    latlng: new daum.maps.LatLng(33.24372027689554, 126.54628438992901)
},
{
    title: '효돈동주민센터',
    latlng: new daum.maps.LatLng(33.31040221311107, 126.46755089233922)
},
{
    title: '쇠소깍 무료주차장 화장실',
    latlng: new daum.maps.LatLng(33.25085609368804, 126.56504802254067)
},
{
    title: '쇠소깍화장실',
    latlng: new daum.maps.LatLng(33.24633811503523, 126.57156869426996)
},
{
    title: '쇠소깍해변종합안내센터',
    latlng: new daum.maps.LatLng(33.25757998529161, 126.33062302191878)
},
{
    title: '하효항화장실',
    latlng: new daum.maps.LatLng(33.25757998529161, 126.33062302191878)
},
{
    title: '서홍동행정복지센터',
    latlng: new daum.maps.LatLng(33.256092992096406, 126.32840653202376)
},
{
    title: '솜반천관리상황실',
    latlng: new daum.maps.LatLng(33.256092992096406, 126.32840653202376)
},
{
    title: '예래동주민센터',
    latlng: new daum.maps.LatLng(33.25824432958095, 126.35394852057112)
},
{
    title: '중문색달해수욕장',
    latlng: new daum.maps.LatLng(33.25505200640913, 126.33065088462651)
},
{
    title: '논짓물',
    latlng: new daum.maps.LatLng(33.240856625397875, 126.33394789518175)
},
{
    title: '동부노인복지회관',
    latlng: new daum.maps.LatLng(33.26330272298272, 126.61556181303158)
},
{
    title: '남원생활체육관-내',
    latlng: new daum.maps.LatLng(33.25424606530691, 126.62240514256442)
},
{
    title: '남원생활체육관-야외',
    latlng: new daum.maps.LatLng(33.25214888941942, 126.62300651800294)
},
{
    title: '생태체험관',
    latlng: new daum.maps.LatLng(33.25140730704039, 126.62226711815538)
},
{
    title: '자구리공원내 공중화장실',
    latlng: new daum.maps.LatLng(33.25016628690598, 126.62095900332473)
},
{
    title: '송산동주민센터',
    latlng: new daum.maps.LatLng(33.25570747630586, 126.56009609069348)
},
{
    title: '대천동주민센터',
    latlng: new daum.maps.LatLng(33.25359946498481, 126.55351768629149)
},
{
    title: '남원읍사무소',
    latlng: new daum.maps.LatLng(33.254281241507755, 126.39786819177733)
},
{
    title: '남원해안경승지(큰엉)',
    latlng: new daum.maps.LatLng(33.244900094109575, 126.41434091923836)
},
{
    title: '충혼묘지',
    latlng: new daum.maps.LatLng(33.236686697689116, 126.38856443591942)
},
{
    title: '위미농어촌문화의집',
    latlng: new daum.maps.LatLng(33.236686697689116, 126.38856443591942)
},
{
    title: '남원읍 공설공원묘지(A,B동)',
    latlng: new daum.maps.LatLng(33.28426438502687, 126.71487196816057)
},
{
    title: '남원청소년문화의집',
    latlng: new daum.maps.LatLng(33.27810722704525, 126.70524400670556)
},
{
    title: '표선면사무소',
    latlng: new daum.maps.LatLng(33.27810722704525, 126.70524400670556)
},
{
    title: '하천리 올레쉼터',
    latlng: new daum.maps.LatLng(33.24503130754481, 126.56600825369422)
},
{
    title: '표선생활체육관',
    latlng: new daum.maps.LatLng(33.250760895433615, 126.47754056645074)
},
{
    title: '표선생활체육관 야외화장실',
    latlng: new daum.maps.LatLng(33.279895637758855, 126.72067851455084)
},
{
    title: '표선전천후게이트볼장',
    latlng: new daum.maps.LatLng(33.27335017549068, 126.70371004466264)
},
{
    title: '표선충혼묘지',
    latlng: new daum.maps.LatLng(33.353247253274, 126.69417446061028)
},
{
    title: '표선공설묘지',
    latlng: new daum.maps.LatLng(33.33904602434532, 126.69462799311354)
},
{
    title: '표선오일시장',
    latlng: new daum.maps.LatLng(33.28096544378072, 126.70909028254742)
},
{
    title: '표선해수욕장',
    latlng: new daum.maps.LatLng(33.326489694836646, 126.83157113474466)
},
{
    title: '표선해수욕장 야영장',
    latlng: new daum.maps.LatLng(33.3325354089188, 126.84352067671102)
},
{
    title: '표선도서관',
    latlng: new daum.maps.LatLng(33.35426414106769, 126.81439226548015)
},
{
    title: '천지동 주민센터',
    latlng: new daum.maps.LatLng(33.35426414106769, 126.81439226548015)
},
{
    title: '돈내코야영장 화장실',
    latlng: new daum.maps.LatLng(33.35318790175785, 126.81338895536072)
},
{
    title: '돈내코사무실 화장실',
    latlng: new daum.maps.LatLng(33.41479688862466, 126.76247769679337)
},
{
    title: '영천동주민센터 외부 화장실',
    latlng: new daum.maps.LatLng(33.428873532396125, 126.81350673274211)
},
{
    title: '천지공원 화장실',
    latlng: new daum.maps.LatLng(33.32271566670817, 126.83038413003969)
},
{
    title: '샛기정공원 화장실',
    latlng: new daum.maps.LatLng(33.32585122211311, 126.84247579113455)
},
{
    title: '돈내코산책로 화장실',
    latlng: new daum.maps.LatLng(33.325649114564776, 126.83954624092766)
},
{
    title: '돈내코운동장 화장실',
    latlng: new daum.maps.LatLng(33.323775974370406, 126.83849716124507)
},
{
    title: '영천동주민센터',
    latlng: new daum.maps.LatLng(33.24776253277778, 126.56117890295282)
},
{
    title: '중문동주민센터',
    latlng: new daum.maps.LatLng(33.251182900405915, 126.55851341612536)
},
{
    title: '신산청소년문화의집',
    latlng: new daum.maps.LatLng(33.24685132235273, 126.55644491449016)
},
{
    title: '성산일출도서관',
    latlng: new daum.maps.LatLng(33.44210927694624, 126.91097858118758)
},
{
    title: '성산생활체육관(국민체육센터)',
    latlng: new daum.maps.LatLng(33.45527374517873, 126.91229889008346)
},
{
    title: '산지물야외화장실',
    latlng: new daum.maps.LatLng(33.381264685468786, 126.87729076828987)
},
{
    title: '동홍동행정복지센터',
    latlng: new daum.maps.LatLng(33.46675840301703, 126.90489904968479)
},
{
    title: '마라도화장실-1(자리덕)',
    latlng: new daum.maps.LatLng(33.26463204325946, 126.56477798067024)
},
{
    title: '마라도화장실-2(관광쉼터)',
    latlng: new daum.maps.LatLng(33.25783015736346, 126.56891982071039)
},
{
    title: '송악산주차장',
    latlng: new daum.maps.LatLng(33.12070461471175, 126.26690718549642)
},
{
    title: '송악산주차장(부남코지)',
    latlng: new daum.maps.LatLng(33.20679461409599, 126.28918109330088)
},
{
    title: '대정체육관-야외',
    latlng: new daum.maps.LatLng(33.19909414608814, 126.29350303891944)
},
{
    title: '대정체육관-본관',
    latlng: new daum.maps.LatLng(33.263927116614425, 126.23551243879851)
},
{
    title: '모슬포오일시장',
    latlng: new daum.maps.LatLng(33.263927116614425, 126.23551243879851)
},
{
    title: '대정읍사무소',
    latlng: new daum.maps.LatLng(33.226827746155244, 126.25213287600955)
},
{
    title: '대정매일시장',
    latlng: new daum.maps.LatLng(33.220567758165906, 126.2474834523752)
},
{
    title: '하모해수욕장',
    latlng: new daum.maps.LatLng(33.22106038027908, 126.25503104528894)
},
{
    title: '모슬포토요시장',
    latlng: new daum.maps.LatLng(33.21133336053084, 126.26101267159467)
},
{
    title: '상모해녀의 집 옆',
    latlng: new daum.maps.LatLng(33.217951046743394, 126.25073242160104)
},
{
    title: '안덕 청소년문화의집',
    latlng: new daum.maps.LatLng(33.1999594335328, 126.27588652374097)
},
{
    title: '하모체육공원',
    latlng: new daum.maps.LatLng(33.24963364882762, 126.3371133684915)
},
{
    title: '무릉문화의집',
    latlng: new daum.maps.LatLng(33.218782261683366, 126.2528191934207)
},
{
    title: '평화대공원',
    latlng: new daum.maps.LatLng(33.273459535054066, 126.19895736815674)
},
{
    title: '송악산 숲길',
    latlng: new daum.maps.LatLng(33.20503327683577, 126.27766801413631)
},
{
    title: '대평 버스정류소',
    latlng: new daum.maps.LatLng(33.203844900337884, 126.28798658023416)
},
{
    title: '화순곶자왈 화장실',
    latlng: new daum.maps.LatLng(33.23514802368414, 126.36719042563494)
},
{
    title: '돈내코휴계소',
    latlng: new daum.maps.LatLng(33.28374872938124, 126.29608078868705)
},
{
    title: '돔벵이물',
    latlng: new daum.maps.LatLng(33.30031377016967, 126.58450285547644)
},
{
    title: '일출고성운동장',
    latlng: new daum.maps.LatLng(33.451963704684715, 126.91325732898464)
},
{
    title: '고성오일시장',
    latlng: new daum.maps.LatLng(33.435193076771945, 126.92322758792444)
},
{
    title: '신양섭지코지해변',
    latlng: new daum.maps.LatLng(33.4254875442828, 126.92832418898503)
},
{
    title: '섭지코지',
    latlng: new daum.maps.LatLng(33.435216551675616, 126.81787204213501)
},
{
    title: '성산읍납골당(공설묘지)',
    latlng: new daum.maps.LatLng(33.46898907449147, 126.92324083447964)
},
{
    title: '오조 한도교',
    latlng: new daum.maps.LatLng(33.462553270321266, 126.91477858285128)
},
{
    title: '오조 올레(펌프장)',
    latlng: new daum.maps.LatLng(33.43646723691841, 126.83813385765384)
},
{
    title: '수산2리 생태마을 포토존',
    latlng: new daum.maps.LatLng(33.46779152664401, 126.92893484664297)
},
{
    title: '갑문소공원(한도교화장실)',
    latlng: new daum.maps.LatLng(33.35819503522335, 126.86779093838285)
},
{
    title: '신풍리 올레길 화장실(바다목장 올레)',
    latlng: new daum.maps.LatLng(33.2374523836952, 126.36150885629392)
},
{
    title: '대평포구',
    latlng: new daum.maps.LatLng(33.242990366812926, 126.3892029680394)
},
{
    title: '서광동리곶자왈 화장실',
    latlng: new daum.maps.LatLng(33.24467565601568, 126.48246110443405)
}
];
// 마커 이미지의 이미지 주소입니다
var imageSrc = "./img/t_pointer.jpg";

for (var i = 0; i < positions.length; i ++) {

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new daum.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var tMarkers = new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지
    });
}

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            var locPosition = new daum.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">현재위치입니다!</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

          });

    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        var locPosition = new daum.maps.LatLng(33.450701, 126.570667),
            message = 'geolocation을 사용할수 없어요..'

        displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            map: map,
            position: locPosition
        });

        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new daum.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
    }

var drawingFlag = false; // 선이 그려지고 있는 상태를 가지고 있을 변수입니다
var moveLine; // 선이 그려지고 있을때 마우스 움직임에 따라 그려질 선 객체 입니다
var clickLine // 마우스로 클릭한 좌표로 그려질 선 객체입니다
var distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
var dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 선 그리기가 시작됩니다 그려진 선이 있으면 지우고 다시 그립니다
daum.maps.event.addListener(map, 'click', function(mouseEvent) {

    // 마우스로 클릭한 위치입니다
    var clickPosition = mouseEvent.latLng;

    // 지도 클릭이벤트가 발생했는데 선을 그리고있는 상태가 아니면
    if (!drawingFlag) {

        // 상태를 true로, 선이 그리고있는 상태로 변경합니다
        drawingFlag = true;

        // 지도 위에 선이 표시되고 있다면 지도에서 제거합니다
        deleteClickLine();

        // 지도 위에 커스텀오버레이가 표시되고 있다면 지도에서 제거합니다
        deleteDistnce();

        // 지도 위에 선을 그리기 위해 클릭한 지점과 해당 지점의 거리정보가 표시되고 있다면 지도에서 제거합니다
        deleteCircleDot();

        // 클릭한 위치를 기준으로 선을 생성하고 지도위에 표시합니다
        clickLine = new daum.maps.Polyline({
            map: map, // 선을 표시할 지도입니다
            path: [clickPosition], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#db4040', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });

        // 선이 그려지고 있을 때 마우스 움직임에 따라 선이 그려질 위치를 표시할 선을 생성합니다
        moveLine = new daum.maps.Polyline({
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#db4040', // 선의 색깔입니다
            strokeOpacity: 0.5, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });

        // 클릭한 지점에 대한 정보를 지도에 표시합니다
        displayCircleDot(clickPosition, 0);


    } else { // 선이 그려지고 있는 상태이면

        // 그려지고 있는 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();

        // 좌표 배열에 클릭한 위치를 추가합니다
        path.push(clickPosition);

        // 다시 선에 좌표 배열을 설정하여 클릭 위치까지 선을 그리도록 설정합니다
        clickLine.setPath(path);

        var distance = Math.round(clickLine.getLength());
        displayCircleDot(clickPosition, distance);
    }
});

// 지도에 마우스무브 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 선의 위치를 동적으로 보여주도록 합니다
daum.maps.event.addListener(map, 'mousemove', function (mouseEvent) {

    // 지도 마우스무브 이벤트가 발생했는데 선을 그리고있는 상태이면
    if (drawingFlag){

        // 마우스 커서의 현재 위치를 얻어옵니다
        var mousePosition = mouseEvent.latLng;

        // 마우스 클릭으로 그려진 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();

        // 마우스 클릭으로 그려진 마지막 좌표와 마우스 커서 위치의 좌표로 선을 표시합니다
        var movepath = [path[path.length-1], mousePosition];
        moveLine.setPath(movepath);
        moveLine.setMap(map);

        var distance = Math.round(clickLine.getLength() + moveLine.getLength()), // 선의 총 거리를 계산합니다
            content = '<div class="dotOverlay distanceInfo">총거리 <span class="number">' + distance + '</span>m</div>'; // 커스텀오버레이에 추가될 내용입니다

        // 거리정보를 지도에 표시합니다
        showDistance(content, mousePosition);
    }
});

// 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면 선 그리기를 종료합니다
daum.maps.event.addListener(map, 'rightclick', function (mouseEvent) {

    // 지도 오른쪽 클릭 이벤트가 발생했는데 선을 그리고있는 상태이면
    if (drawingFlag) {

        // 마우스무브로 그려진 선은 지도에서 제거합니다
        moveLine.setMap(null);
        moveLine = null;

        // 마우스 클릭으로 그린 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();

        // 선을 구성하는 좌표의 개수가 2개 이상이면
        if (path.length > 1) {

            // 마지막 클릭 지점에 대한 거리 정보 커스텀 오버레이를 지웁니다
            if (dots[dots.length-1].distance) {
                dots[dots.length-1].distance.setMap(null);
                dots[dots.length-1].distance = null;
            }

            var distance = Math.round(clickLine.getLength()), // 선의 총 거리를 계산합니다
                content = getTimeHTML(distance); // 커스텀오버레이에 추가될 내용입니다

            // 그려진 선의 거리정보를 지도에 표시합니다
            showDistance(content, path[path.length-1]);

        } else {

            // 선을 구성하는 좌표의 개수가 1개 이하이면
            // 지도에 표시되고 있는 선과 정보들을 지도에서 제거합니다.
            deleteClickLine();
            deleteCircleDot();
            deleteDistnce();

        }

        // 상태를 false로, 그리지 않고 있는 상태로 변경합니다
        drawingFlag = false;
    }
});

// 클릭으로 그려진 선을 지도에서 제거하는 함수입니다
function deleteClickLine() {
    if (clickLine) {
        clickLine.setMap(null);
        clickLine = null;
    }
}

// 마우스 드래그로 그려지고 있는 선의 총거리 정보를 표시하거
// 마우스 오른쪽 클릭으로 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 생성하고 지도에 표시하는 함수입니다
function showDistance(content, position) {

    if (distanceOverlay) { // 커스텀오버레이가 생성된 상태이면

        // 커스텀 오버레이의 위치와 표시할 내용을 설정합니다
        distanceOverlay.setPosition(position);
        distanceOverlay.setContent(content);

    } else { // 커스텀 오버레이가 생성되지 않은 상태이면

        // 커스텀 오버레이를 생성하고 지도에 표시합니다
        distanceOverlay = new daum.maps.CustomOverlay({
            map: map, // 커스텀오버레이를 표시할 지도입니다
            content: content,  // 커스텀오버레이에 표시할 내용입니다
            position: position, // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: 0,
            yAnchor: 0,
            zIndex: 3
        });
    }
}

// 그려지고 있는 선의 총거리 정보와
// 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 삭제하는 함수입니다
function deleteDistnce () {
    if (distanceOverlay) {
        distanceOverlay.setMap(null);
        distanceOverlay = null;
    }
}

// 선이 그려지고 있는 상태일 때 지도를 클릭하면 호출하여
// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 표출하는 함수입니다
function displayCircleDot(position, distance) {

    // 클릭 지점을 표시할 빨간 동그라미 커스텀오버레이를 생성합니다
    var circleOverlay = new daum.maps.CustomOverlay({
        content: '<span class="dot"></span>',
        position: position,
        zIndex: 1
    });

    // 지도에 표시합니다
    circleOverlay.setMap(map);

    if (distance > 0) {
        // 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
        var distanceOverlay = new daum.maps.CustomOverlay({
            content: '<div class="dotOverlay">거리 <span class="number">' + distance + '</span>m</div>',
            position: position,
            yAnchor: 1,
            zIndex: 2
        });

        // 지도에 표시합니다
        distanceOverlay.setMap(map);
    }

    // 배열에 추가합니다
    dots.push({circle:circleOverlay, distance: distanceOverlay});
}

// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 지도에서 모두 제거하는 함수입니다
function deleteCircleDot() {
    var i;

    for ( i = 0; i < dots.length; i++ ){
        if (dots[i].circle) {
            dots[i].circle.setMap(null);
        }

        if (dots[i].distance) {
            dots[i].distance.setMap(null);
        }
    }

    dots = [];
}

// 마우스 우클릭 하여 선 그리기가 종료됐을 때 호출하여
// 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
// HTML Content를 만들어 리턴하는 함수입니다
function getTimeHTML(distance) {

    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
    var walkkTime = distance / 67 | 0;
    var walkHour = '', walkMin = '';

    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
    if (walkkTime > 60) {
        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
    }
    walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'


    // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
    var content = '<ul class="dotOverlay distanceInfo">';
    content += '    <li>';
    content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
    content += '    </li>';
    content += '    <li>';
    content += '        <span class="label">걸어서</span>' + walkHour + walkMin;
    content += '    </li>';
    content += '</ul>'

    return content;
}
