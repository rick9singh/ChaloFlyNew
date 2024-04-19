import { Component } from '@angular/core';


@Component({
  selector: 'app-bus-between-cities.component',
  templateUrl: './bus-between-cities.component.component.html',
  styleUrl: './bus-between-cities.component.component.css'
})


export class BusBetweenCitiesComponentComponent {

  model={
    source:'',
    destination:''
  }
 sourceCities:any;
 destinationCities:any;
 showDestinationModel=false
 showSourceModel=false
 citiesData=[
   {
       "CityId": "4826",
       "CityName": "C K Road"
   },
   {
       "CityId": "4827",
       "CityName": "C. Belagal"
   },
   {
       "CityId": "4828",
       "CityName": "C.b.d Belapur"
   },
   {
       "CityId": "4829",
       "CityName": "C.s.puram"
   },
   {
       "CityId": "4830",
       "CityName": "Cakede"
   },
   {
       "CityId": "4831",
       "CityName": "Calangute (goa)"
   },
   {
       "CityId": "4832",
       "CityName": "Calcutta Test"
   },
   {
       "CityId": "4833",
       "CityName": "Caledon"
   },
   {
       "CityId": "4834",
       "CityName": "Calicut"
   },
   {
       "CityId": "4835",
       "CityName": "Calicut Univercity"
   },
   {
       "CityId": "4836",
       "CityName": "Camorlim"
   },
   {
       "CityId": "4837",
       "CityName": "Campbellabad"
   },
   {
       "CityId": "4838",
       "CityName": "Campbellabad (tamil Nadu)"
   },
   {
       "CityId": "4839",
       "CityName": "Campirganj"
   },
   {
       "CityId": "4840",
       "CityName": "Campirganj (uttar Pradesh)"
   },
   {
       "CityId": "4841",
       "CityName": "Cana"
   },
   {
       "CityId": "4842",
       "CityName": "Candeapar"
   },
   {
       "CityId": "4843",
       "CityName": "Candolim"
   },
   {
       "CityId": "4844",
       "CityName": "Cannanore"
   },
   {
       "CityId": "4845",
       "CityName": "Canning"
   },
   {
       "CityId": "4846",
       "CityName": "Canvorem"
   },
   {
       "CityId": "4847",
       "CityName": "Capao"
   },
   {
       "CityId": "4848",
       "CityName": "Cape Town"
   },
   {
       "CityId": "4849",
       "CityName": "Car Nicobar"
   },
   {
       "CityId": "4850",
       "CityName": "Caranzol"
   },
   {
       "CityId": "4851",
       "CityName": "Carapur"
   },
   {
       "CityId": "4852",
       "CityName": "Caritas"
   },
   {
       "CityId": "4853",
       "CityName": "Carltonville"
   },
   {
       "CityId": "4854",
       "CityName": "Carmona"
   },
   {
       "CityId": "4855",
       "CityName": "Casarvane Vp Goa"
   },
   {
       "CityId": "4856",
       "CityName": "Cathgart"
   },
   {
       "CityId": "4857",
       "CityName": "Cavorem Goa"
   },
   {
       "CityId": "4858",
       "CityName": "Cbs Hyderabad"
   },
   {
       "CityId": "4859",
       "CityName": "Cbus Termial Lalghati (bpl)"
   },
   {
       "CityId": "4860",
       "CityName": "Cc Head (rajasthan)"
   },
   {
       "CityId": "4861",
       "CityName": "Cdp Belapur"
   },
   {
       "CityId": "4862",
       "CityName": "Cement Nagar"
   },
   {
       "CityId": "4863",
       "CityName": "Central"
   },
   {
       "CityId": "4864",
       "CityName": "Central Market"
   },
   {
       "CityId": "4865",
       "CityName": "Certhala"
   },
   {
       "CityId": "4866",
       "CityName": "Cetali"
   },
   {
       "CityId": "4867",
       "CityName": "Chaba(rajasthan)"
   },
   {
       "CityId": "4868",
       "CityName": "Chabbewal"
   },
   {
       "CityId": "4869",
       "CityName": "Chabhadiya"
   },
   {
       "CityId": "4870",
       "CityName": "Chabi"
   },
   {
       "CityId": "4871",
       "CityName": "Chabi (madhya Pradesh)"
   },
   {
       "CityId": "4872",
       "CityName": "Chacha"
   },
   {
       "CityId": "4873",
       "CityName": "Chacha (rajasthan)"
   },
   {
       "CityId": "4874",
       "CityName": "Chachadgaon"
   },
   {
       "CityId": "4875",
       "CityName": "Chachana Dhk"
   },
   {
       "CityId": "4876",
       "CityName": "Chachat"
   },
   {
       "CityId": "4877",
       "CityName": "Chachaura Binaganj"
   },
   {
       "CityId": "4878",
       "CityName": "Chachaura-binaganj"
   },
   {
       "CityId": "4879",
       "CityName": "Chachegaon"
   },
   {
       "CityId": "4880",
       "CityName": "Chachroti (uttarakhand)"
   },
   {
       "CityId": "4881",
       "CityName": "Chachua Fanta"
   },
   {
       "CityId": "4882",
       "CityName": "Chackai"
   },
   {
       "CityId": "4883",
       "CityName": "Chadachan"
   },
   {
       "CityId": "4884",
       "CityName": "Chadalamarri"
   },
   {
       "CityId": "4885",
       "CityName": "Chadani Chowk"
   },
   {
       "CityId": "4886",
       "CityName": "Chadasana"
   },
   {
       "CityId": "4887",
       "CityName": "Chadayamangalam"
   },
   {
       "CityId": "4888",
       "CityName": "Chadchan"
   },
   {
       "CityId": "4889",
       "CityName": "Chadhiar"
   },
   {
       "CityId": "4890",
       "CityName": "Chadi"
   },
   {
       "CityId": "4891",
       "CityName": "Chadiar(kangra)"
   },
   {
       "CityId": "4892",
       "CityName": "Chadiya"
   },
   {
       "CityId": "4893",
       "CityName": "Chado Ki Dhani"
   },
   {
       "CityId": "4894",
       "CityName": "Chadoli"
   },
   {
       "CityId": "4895",
       "CityName": "Chadoora"
   },
   {
       "CityId": "4896",
       "CityName": "Chadotar (gujarat)"
   },
   {
       "CityId": "4897",
       "CityName": "Chadotar(gujarat)"
   },
   {
       "CityId": "4898",
       "CityName": "Chadotara (orissa)"
   },
   {
       "CityId": "4899",
       "CityName": "Chadwel"
   },
   {
       "CityId": "4900",
       "CityName": "Chadwel Korde"
   },
   {
       "CityId": "4901",
       "CityName": "Chafal Fata"
   },
   {
       "CityId": "4902",
       "CityName": "Chafe (ratnagiri)"
   },
   {
       "CityId": "4903",
       "CityName": "Chafe(ratnagiri)"
   },
   {
       "CityId": "4904",
       "CityName": "Chagalamarri"
   },
   {
       "CityId": "4905",
       "CityName": "Chagallu"
   },
   {
       "CityId": "4906",
       "CityName": "Chagantipadu"
   },
   {
       "CityId": "4907",
       "CityName": "Chahuwali"
   },
   {
       "CityId": "4908",
       "CityName": "Chaibari"
   },
   {
       "CityId": "4909",
       "CityName": "Chaibasa"
   },
   {
       "CityId": "4910",
       "CityName": "Chail"
   },
   {
       "CityId": "4911",
       "CityName": "Chail Chowk"
   },
   {
       "CityId": "4912",
       "CityName": "Chail Chowk (himachal Pradesh)"
   },
   {
       "CityId": "4913",
       "CityName": "Chailla (himachal Pradesh)"
   },
   {
       "CityId": "4914",
       "CityName": "Chainpur"
   },
   {
       "CityId": "4915",
       "CityName": "Chainpur (bihar)"
   },
   {
       "CityId": "4916",
       "CityName": "Chainpuria  (madhya Pradesh)"
   },
   {
       "CityId": "4917",
       "CityName": "Chainpuria (rjg)"
   },
   {
       "CityId": "4918",
       "CityName": "Chaiya (rajasthan)"
   },
   {
       "CityId": "4919",
       "CityName": "Chak Dhani (rajasthan)"
   },
   {
       "CityId": "4920",
       "CityName": "Chak Masoodpur  (madhya Pradesh)"
   },
   {
       "CityId": "4921",
       "CityName": "Chak Masoodpur (vd)"
   },
   {
       "CityId": "4922",
       "CityName": "Chak Patli"
   },
   {
       "CityId": "4923",
       "CityName": "Chakai"
   },
   {
       "CityId": "4924",
       "CityName": "Chakai (bihar)"
   },
   {
       "CityId": "4925",
       "CityName": "Chakalakonda"
   },
   {
       "CityId": "4926",
       "CityName": "Chakalikonda (udayagiri)"
   },
   {
       "CityId": "4927",
       "CityName": "Chakalikonda Udg"
   },
   {
       "CityId": "4928",
       "CityName": "Chakalipalem"
   },
   {
       "CityId": "4929",
       "CityName": "Chakalipalem (andhra Pradesh)"
   },
   {
       "CityId": "4930",
       "CityName": "Chakampar"
   },
   {
       "CityId": "4931",
       "CityName": "Chakan"
   },
   {
       "CityId": "4932",
       "CityName": "Chakan (madhya Pradesh)"
   },
   {
       "CityId": "4933",
       "CityName": "Chakapada"
   },
   {
       "CityId": "4934",
       "CityName": "Chakarava"
   },
   {
       "CityId": "4935",
       "CityName": "Chakarbhatha"
   },
   {
       "CityId": "4936",
       "CityName": "Chakarda"
   },
   {
       "CityId": "4937",
       "CityName": "Chakarda Chokdi"
   },
   {
       "CityId": "4938",
       "CityName": "Chakdaha (west Bengal)"
   },
   {
       "CityId": "4939",
       "CityName": "Chakghat"
   },
   {
       "CityId": "4940",
       "CityName": "Chakia"
   },
   {
       "CityId": "4941",
       "CityName": "Chakia (uttar Pradesh)"
   },
   {
       "CityId": "4942",
       "CityName": "Chakiyan"
   },
   {
       "CityId": "4943",
       "CityName": "Chakiyan (bihar)"
   },
   {
       "CityId": "4944",
       "CityName": "Chakka Junction"
   },
   {
       "CityId": "4945",
       "CityName": "Chakkan Nagar"
   },
   {
       "CityId": "4946",
       "CityName": "Chakkargadh"
   },
   {
       "CityId": "4947",
       "CityName": "Chakki"
   },
   {
       "CityId": "4948",
       "CityName": "Chakki (bihar)"
   },
   {
       "CityId": "4949",
       "CityName": "Chaklasi"
   },
   {
       "CityId": "4950",
       "CityName": "Chakoti (uttarakhand)"
   },
   {
       "CityId": "4951",
       "CityName": "Chakradharpur"
   },
   {
       "CityId": "4952",
       "CityName": "Chakradwarabandham"
   },
   {
       "CityId": "4953",
       "CityName": "Chakrampeta"
   },
   {
       "CityId": "4954",
       "CityName": "Chakrata"
   },
   {
       "CityId": "4955",
       "CityName": "Chakrata (uttar Pradesh)"
   },
   {
       "CityId": "4956",
       "CityName": "Chakrata (uttarakhand)"
   },
   {
       "CityId": "4957",
       "CityName": "Chakrava"
   },
   {
       "CityId": "4958",
       "CityName": "Chakrava (gujarat)"
   },
   {
       "CityId": "4959",
       "CityName": "Chakrawa"
   },
   {
       "CityId": "4960",
       "CityName": "Chakrawa (uttar Pradesh)"
   },
   {
       "CityId": "4961",
       "CityName": "Chakrayapet"
   },
   {
       "CityId": "4962",
       "CityName": "Chakrda"
   },
   {
       "CityId": "4963",
       "CityName": "Chakrod Rd (sfy)"
   },
   {
       "CityId": "4964",
       "CityName": "Chaksu"
   },
   {
       "CityId": "4965",
       "CityName": "Chakulia"
   },
   {
       "CityId": "4966",
       "CityName": "Chakur"
   },
   {
       "CityId": "4967",
       "CityName": "Chala"
   },
   {
       "CityId": "4968",
       "CityName": "Chala (rajasthan)"
   },
   {
       "CityId": "4969",
       "CityName": "Chalakudy"
   },
   {
       "CityId": "4970",
       "CityName": "Chalala"
   },
   {
       "CityId": "4971",
       "CityName": "Chalala Dhr"
   },
   {
       "CityId": "4972",
       "CityName": "Chalasana"
   },
   {
       "CityId": "4973",
       "CityName": "Chalis Ganv"
   },
   {
       "CityId": "4974",
       "CityName": "Chalisgaon"
   },
   {
       "CityId": "4975",
       "CityName": "Challa"
   },
   {
       "CityId": "4976",
       "CityName": "Challa (rajasthan)"
   },
   {
       "CityId": "4977",
       "CityName": "Challagulla"
   },
   {
       "CityId": "4978",
       "CityName": "Challakere"
   },
   {
       "CityId": "4979",
       "CityName": "Challapalli"
   },
   {
       "CityId": "4980",
       "CityName": "Challapeta"
   },
   {
       "CityId": "4981",
       "CityName": "Challavanipeta"
   },
   {
       "CityId": "4982",
       "CityName": "Chalode"
   },
   {
       "CityId": "4983",
       "CityName": "Chamadi"
   },
   {
       "CityId": "4984",
       "CityName": "Chamanal (karnatalka)"
   },
   {
       "CityId": "4985",
       "CityName": "Chamanal (yadgir, Karnataka)"
   },
   {
       "CityId": "4986",
       "CityName": "Chamaradi"
   },
   {
       "CityId": "4987",
       "CityName": "Chamarajanagar"
   },
   {
       "CityId": "4988",
       "CityName": "Chamari"
   },
   {
       "CityId": "4989",
       "CityName": "Chamaria"
   },
   {
       "CityId": "4990",
       "CityName": "Chamata"
   },
   {
       "CityId": "4991",
       "CityName": "Chamba"
   },
   {
       "CityId": "4992",
       "CityName": "Chamba (himachal Pradesh)"
   },
   {
       "CityId": "4993",
       "CityName": "Chamba (uttarakhand)"
   },
   {
       "CityId": "4994",
       "CityName": "Chamba(uttarakhand)"
   },
   {
       "CityId": "4995",
       "CityName": "Chambang"
   },
   {
       "CityId": "4996",
       "CityName": "Chambanthotty"
   },
   {
       "CityId": "4997",
       "CityName": "Chambi"
   },
   {
       "CityId": "4998",
       "CityName": "Chamiari"
   },
   {
       "CityId": "4999",
       "CityName": "Chamiyala"
   },
   {
       "CityId": "5000",
       "CityName": "Chamnal Cross"
   },
   {
       "CityId": "5001",
       "CityName": "Chamoli (uttarakhand)"
   },
   {
       "CityId": "5002",
       "CityName": "Chamorshi"
   },
   {
       "CityId": "5003",
       "CityName": "Chamorshi (maharashtra)"
   },
   {
       "CityId": "5004",
       "CityName": "Champa (chhattisgarh)"
   },
   {
       "CityId": "5005",
       "CityName": "Champa Nagar (uttarakhand)"
   },
   {
       "CityId": "5006",
       "CityName": "Champad"
   },
   {
       "CityId": "5007",
       "CityName": "Champad (kerala)"
   },
   {
       "CityId": "5008",
       "CityName": "Champaner"
   },
   {
       "CityId": "5009",
       "CityName": "Champaner(gujarat)"
   },
   {
       "CityId": "5010",
       "CityName": "Champaran"
   },
   {
       "CityId": "5011",
       "CityName": "Champawat"
   },
   {
       "CityId": "5012",
       "CityName": "Champhai"
   },
   {
       "CityId": "5013",
       "CityName": "Champua"
   },
   {
       "CityId": "5014",
       "CityName": "Champua (orissa)"
   },
   {
       "CityId": "5015",
       "CityName": "Chamravattom"
   },
   {
       "CityId": "5016",
       "CityName": "Chamravattom (kerala)"
   },
   {
       "CityId": "5017",
       "CityName": "Chamu"
   },
   {
       "CityId": "5018",
       "CityName": "Chamu (rajasthan)"
   },
   {
       "CityId": "5019",
       "CityName": "Chamukha (himachal Pradesh)"
   },
   {
       "CityId": "5020",
       "CityName": "Chamunda"
   },
   {
       "CityId": "5021",
       "CityName": "Chamunda Devi"
   },
   {
       "CityId": "5022",
       "CityName": "Chamunda Devi (himachal Pradesh)"
   },
   {
       "CityId": "5023",
       "CityName": "Chamunderi"
   },
   {
       "CityId": "5024",
       "CityName": "Chamundipuram"
   },
   {
       "CityId": "5025",
       "CityName": "Chanaka (assam)"
   },
   {
       "CityId": "5026",
       "CityName": "Chanaka(gj)"
   },
   {
       "CityId": "5027",
       "CityName": "Chanaka(gujarat)"
   },
   {
       "CityId": "5028",
       "CityName": "Chanan"
   },
   {
       "CityId": "5029",
       "CityName": "Chanan (bihar)"
   },
   {
       "CityId": "5030",
       "CityName": "Chanan (rajasthan)"
   },
   {
       "CityId": "5031",
       "CityName": "Chanana"
   },
   {
       "CityId": "5032",
       "CityName": "Chanarapatna"
   },
   {
       "CityId": "5033",
       "CityName": "Chanasma"
   },
   {
       "CityId": "5034",
       "CityName": "Chanaur (himachal Pradesh)"
   },
   {
       "CityId": "5035",
       "CityName": "Chanchal"
   },
   {
       "CityId": "5036",
       "CityName": "Chanchal (west Bengal)"
   },
   {
       "CityId": "5037",
       "CityName": "Chancharsi  (madhya Pradesh)"
   },
   {
       "CityId": "5038",
       "CityName": "Chancharsi (shr)"
   },
   {
       "CityId": "5039",
       "CityName": "Chanchelav Gdr"
   },
   {
       "CityId": "5040",
       "CityName": "Chand"
   },
   {
       "CityId": "5041",
       "CityName": "Chand (madhya Pradesh)"
   },
   {
       "CityId": "5042",
       "CityName": "Chand Kheri"
   },
   {
       "CityId": "5043",
       "CityName": "Chanda  (telangana)"
   },
   {
       "CityId": "5044",
       "CityName": "Chanda (rajasthan)"
   },
   {
       "CityId": "5045",
       "CityName": "Chanda (t)(adilabad)"
   },
   {
       "CityId": "5046",
       "CityName": "Chanda (uttar Pradesh)"
   },
   {
       "CityId": "5047",
       "CityName": "Chandahandi"
   },
   {
       "CityId": "5048",
       "CityName": "Chandakpur (karnataka)"
   },
   {
       "CityId": "5049",
       "CityName": "Chandaluru"
   },
   {
       "CityId": "5050",
       "CityName": "Chandan  Nagar"
   },
   {
       "CityId": "5051",
       "CityName": "Chandan (bihar)"
   },
   {
       "CityId": "5052",
       "CityName": "Chandan (rajasthan)"
   },
   {
       "CityId": "5053",
       "CityName": "Chandankera (karnataka)"
   },
   {
       "CityId": "5054",
       "CityName": "Chandankiyari"
   },
   {
       "CityId": "5055",
       "CityName": "Chandannagar"
   },
   {
       "CityId": "5056",
       "CityName": "Chandar Har"
   },
   {
       "CityId": "5057",
       "CityName": "Chandarva"
   },
   {
       "CityId": "5058",
       "CityName": "Chandauli (uttar Pradesh)"
   },
   {
       "CityId": "5059",
       "CityName": "Chandausi"
   },
   {
       "CityId": "5060",
       "CityName": "Chandausi (uttar Pradesh)"
   },
   {
       "CityId": "5061",
       "CityName": "Chandaval Rj"
   },
   {
       "CityId": "5062",
       "CityName": "Chandavar"
   },
   {
       "CityId": "5063",
       "CityName": "Chandavar (karnataka)"
   },
   {
       "CityId": "5064",
       "CityName": "Chandbad  (madhya Pradesh)"
   },
   {
       "CityId": "5065",
       "CityName": "Chandbad (shr)"
   },
   {
       "CityId": "5066",
       "CityName": "Chandbali"
   },
   {
       "CityId": "5067",
       "CityName": "Chandela (up)"
   },
   {
       "CityId": "5068",
       "CityName": "Chandela (uttar Pradesh)"
   },
   {
       "CityId": "5069",
       "CityName": "Chandera"
   },
   {
       "CityId": "5070",
       "CityName": "Chandera (madhya Pradesh)"
   },
   {
       "CityId": "5071",
       "CityName": "Chandera Khas"
   },
   {
       "CityId": "5072",
       "CityName": "Chandera Khas (madhya Pradesh)"
   },
   {
       "CityId": "5073",
       "CityName": "Chandera(madhya Pradesh)"
   },
   {
       "CityId": "5074",
       "CityName": "Chanderiya (rajasthan)"
   },
   {
       "CityId": "5075",
       "CityName": "Chandesari  (madhya Pradesh)"
   },
   {
       "CityId": "5076",
       "CityName": "Chandesari (ujn)"
   },
   {
       "CityId": "5077",
       "CityName": "Chandeswar"
   },
   {
       "CityId": "5078",
       "CityName": "Chandeswar (orissa)"
   },
   {
       "CityId": "5079",
       "CityName": "Chandgad"
   },
   {
       "CityId": "5080",
       "CityName": "Chandgothi (rajasthan)"
   },
   {
       "CityId": "5081",
       "CityName": "Chandhan"
   },
   {
       "CityId": "5082",
       "CityName": "Chandhollu"
   },
   {
       "CityId": "5083",
       "CityName": "Chandi"
   },
   {
       "CityId": "5084",
       "CityName": "Chandia (madhya Pradesh)"
   },
   {
       "CityId": "5085",
       "CityName": "Chandikhol"
   },
   {
       "CityId": "5086",
       "CityName": "Chandil"
   },
   {
       "CityId": "5087",
       "CityName": "Chandili"
   },
   {
       "CityId": "5088",
       "CityName": "Chandipur (rajasthan)"
   },
   {
       "CityId": "5089",
       "CityName": "Chandipur (west Bengal)"
   },
   {
       "CityId": "5090",
       "CityName": "Chandipur(west Bengal)"
   },
   {
       "CityId": "5091",
       "CityName": "Chandiroor"
   },
   {
       "CityId": "5092",
       "CityName": "Chandiroor (kerala)"
   },
   {
       "CityId": "5093",
       "CityName": "Chandisar"
   },
   {
       "CityId": "5094",
       "CityName": "Chandkheda"
   },
   {
       "CityId": "5095",
       "CityName": "Chandkheda Abd"
   },
   {
       "CityId": "5096",
       "CityName": "Chandkheri"
   },
   {
       "CityId": "5097",
       "CityName": "Chandkuchi"
   },
   {
       "CityId": "5098",
       "CityName": "Chandla"
   },
   {
       "CityId": "5099",
       "CityName": "Chandla (madhya Pradesh)"
   },
   {
       "CityId": "5100",
       "CityName": "Chandlodiya Abd"
   },
   {
       "CityId": "5101",
       "CityName": "Chandneswar"
   },
   {
       "CityId": "5102",
       "CityName": "Chandni Chowk"
   },
   {
       "CityId": "5103",
       "CityName": "Chando (chhattisgarh)"
   },
   {
       "CityId": "5104",
       "CityName": "Chando(cg)"
   },
   {
       "CityId": "5105",
       "CityName": "Chandod"
   },
   {
       "CityId": "5106",
       "CityName": "Chandole"
   },
   {
       "CityId": "5107",
       "CityName": "Chandole (andhra Pradesh)"
   },
   {
       "CityId": "5108",
       "CityName": "Chandole(guntur Dist)"
   },
   {
       "CityId": "5109",
       "CityName": "Chandoli (maharashtra)"
   },
   {
       "CityId": "5110",
       "CityName": "Chandoli (maharastra)"
   },
   {
       "CityId": "5111",
       "CityName": "Chandoor"
   },
   {
       "CityId": "5112",
       "CityName": "Chandoor (rajasthan)"
   },
   {
       "CityId": "5113",
       "CityName": "Chandor"
   },
   {
       "CityId": "5114",
       "CityName": "Chandore (raigad)"
   },
   {
       "CityId": "5115",
       "CityName": "Chandori (niphad)"
   },
   {
       "CityId": "5116",
       "CityName": "Chandouli"
   },
   {
       "CityId": "5117",
       "CityName": "Chandpara"
   },
   {
       "CityId": "5118",
       "CityName": "Chandpol (rajasthan)"
   },
   {
       "CityId": "5119",
       "CityName": "Chandpur"
   },
   {
       "CityId": "5120",
       "CityName": "Chandpur (karnataka)"
   },
   {
       "CityId": "5121",
       "CityName": "Chandpur (west Bengal)"
   },
   {
       "CityId": "5122",
       "CityName": "Chandpur Bypass"
   },
   {
       "CityId": "5123",
       "CityName": "Chandragadh"
   },
   {
       "CityId": "5124",
       "CityName": "Chandragadh (gujarat)"
   },
   {
       "CityId": "5125",
       "CityName": "Chandragadh Patiyu"
   },
   {
       "CityId": "5126",
       "CityName": "Chandragiri"
   },
   {
       "CityId": "5127",
       "CityName": "Chandragiri (andhra Pradesh)"
   },
   {
       "CityId": "5128",
       "CityName": "Chandragiri (ap) Bypass"
   },
   {
       "CityId": "5129",
       "CityName": "Chandragutti"
   },
   {
       "CityId": "5130",
       "CityName": "Chandragutti (karnataka)"
   },
   {
       "CityId": "5131",
       "CityName": "Chandragutti(karnataka)"
   },
   {
       "CityId": "5132",
       "CityName": "Chandrai (rajasthan)"
   },
   {
       "CityId": "5133",
       "CityName": "Chandrai (west Bengal)"
   },
   {
       "CityId": "5134",
       "CityName": "Chandrala Gnd"
   },
   {
       "CityId": "5135",
       "CityName": "Chandralapadu"
   },
   {
       "CityId": "5136",
       "CityName": "Chandrampalem"
   },
   {
       "CityId": "5137",
       "CityName": "Chandrapur"
   },
   {
       "CityId": "5138",
       "CityName": "Chandrapur(chattisgarh)"
   },
   {
       "CityId": "5139",
       "CityName": "Chandras"
   },
   {
       "CityId": "5140",
       "CityName": "Chandrasekharapuram"
   },
   {
       "CityId": "5141",
       "CityName": "Chandrash"
   },
   {
       "CityId": "5142",
       "CityName": "Chandravati"
   },
   {
       "CityId": "5143",
       "CityName": "Chandravati (gujarat)"
   },
   {
       "CityId": "5144",
       "CityName": "Chandravati (rajasthan)"
   },
   {
       "CityId": "5145",
       "CityName": "Chandroda"
   },
   {
       "CityId": "5146",
       "CityName": "Chandroda (gujarat)"
   },
   {
       "CityId": "5147",
       "CityName": "Chandroi"
   },
   {
       "CityId": "5148",
       "CityName": "Chandru Gonda"
   },
   {
       "CityId": "5149",
       "CityName": "Chandrupatla (nuzividu)"
   },
   {
       "CityId": "5150",
       "CityName": "Chandsurya Fata"
   },
   {
       "CityId": "5151",
       "CityName": "Chandur"
   },
   {
       "CityId": "5152",
       "CityName": "Chandur Bazaar"
   },
   {
       "CityId": "5153",
       "CityName": "Chandur Railway"
   },
   {
       "CityId": "5154",
       "CityName": "Chandur Railway (maharashtra)"
   },
   {
       "CityId": "5155",
       "CityName": "Chandurbazar"
   },
   {
       "CityId": "5156",
       "CityName": "Chandurgane"
   },
   {
       "CityId": "5157",
       "CityName": "Chanduri"
   },
   {
       "CityId": "5158",
       "CityName": "Chandvad"
   },
   {
       "CityId": "5159",
       "CityName": "Chandve"
   },
   {
       "CityId": "5160",
       "CityName": "Chandwa"
   },
   {
       "CityId": "5161",
       "CityName": "Chandwad (nashik)"
   },
   {
       "CityId": "5162",
       "CityName": "Chandwaji"
   },
   {
       "CityId": "5163",
       "CityName": "Chandwara"
   },
   {
       "CityId": "5164",
       "CityName": "Chandwasa"
   },
   {
       "CityId": "5165",
       "CityName": "Chanera"
   },
   {
       "CityId": "5166",
       "CityName": "Changa"
   },
   {
       "CityId": "5167",
       "CityName": "Changanachery"
   },
   {
       "CityId": "5168",
       "CityName": "Changanasserry"
   },
   {
       "CityId": "5169",
       "CityName": "Changanassery (kerala)"
   },
   {
       "CityId": "5170",
       "CityName": "Changanoor"
   },
   {
       "CityId": "5171",
       "CityName": "Changantipadu (andhra Pradesh)"
   },
   {
       "CityId": "5172",
       "CityName": "Changaramkulam"
   },
   {
       "CityId": "5173",
       "CityName": "Changaramkulam (kerala)"
   },
   {
       "CityId": "5174",
       "CityName": "Changlang"
   },
   {
       "CityId": "5175",
       "CityName": "Changodar"
   },
   {
       "CityId": "5176",
       "CityName": "Changoi"
   },
   {
       "CityId": "5177",
       "CityName": "Changotola"
   },
   {
       "CityId": "5178",
       "CityName": "Changran"
   },
   {
       "CityId": "5179",
       "CityName": "Changsari"
   },
   {
       "CityId": "5180",
       "CityName": "Changtongya"
   },
   {
       "CityId": "5181",
       "CityName": "Changuvetti-india"
   },
   {
       "CityId": "5182",
       "CityName": "Changuvetty"
   },
   {
       "CityId": "5183",
       "CityName": "Chanho"
   },
   {
       "CityId": "5184",
       "CityName": "Chankoya"
   },
   {
       "CityId": "5185",
       "CityName": "Chankuvetty"
   },
   {
       "CityId": "5186",
       "CityName": "Chanmari"
   },
   {
       "CityId": "5187",
       "CityName": "Channagiri"
   },
   {
       "CityId": "5188",
       "CityName": "Channapatana"
   },
   {
       "CityId": "5189",
       "CityName": "Channapatna Sight Seeing"
   },
   {
       "CityId": "5190",
       "CityName": "Channaray Patanna"
   },
   {
       "CityId": "5191",
       "CityName": "Channekuppi"
   },
   {
       "CityId": "5192",
       "CityName": "Channo"
   },
   {
       "CityId": "5193",
       "CityName": "Chanod"
   },
   {
       "CityId": "5194",
       "CityName": "Chanoda (uttarakhand)"
   },
   {
       "CityId": "5195",
       "CityName": "Chanotar"
   },
   {
       "CityId": "5196",
       "CityName": "Chanpatna"
   },
   {
       "CityId": "5197",
       "CityName": "Chansol"
   },
   {
       "CityId": "5198",
       "CityName": "Chansol (gujarat)"
   },
   {
       "CityId": "5199",
       "CityName": "Chansol Krl"
   },
   {
       "CityId": "5200",
       "CityName": "Chansol(gujarat)"
   },
   {
       "CityId": "5201",
       "CityName": "Chanthamukku(kerala)"
   },
   {
       "CityId": "5202",
       "CityName": "Chanubanda (andhra Pradesh)"
   },
   {
       "CityId": "5203",
       "CityName": "Chanvad"
   },
   {
       "CityId": "5204",
       "CityName": "Chanwara"
   },
   {
       "CityId": "5205",
       "CityName": "Chanwara (rajasthan)"
   },
   {
       "CityId": "5206",
       "CityName": "Chapad"
   },
   {
       "CityId": "5207",
       "CityName": "Chapadgaon"
   },
   {
       "CityId": "17359",
       "CityName": "Kuchi"
   },
   {
       "CityId": "17360",
       "CityName": "Kuchinapudi"
   },
   {
       "CityId": "17361",
       "CityName": "Kuchinda"
   },
   {
       "CityId": "17362",
       "CityName": "Kuchinda (odisha)"
   },
   {
       "CityId": "34466",
       "CityName": "Victoria Falls"
   },
   {
       "CityId": "34467",
       "CityName": "Victoria Road Rjl"
   },
   {
       "CityId": "35101",
       "CityName": "Wdc"
   },
   {
       "CityId": "35135",
       "CityName": "Yacharam"
   },
   {
       "CityId": "27405",
       "CityName": "Ranchi"
   },
   {
       "CityId": "27406",
       "CityName": "Ranchodpura"
   },
   {
       "CityId": "27887",
       "CityName": "Riico"
   },
   {
       "CityId": "27888",
       "CityName": "Riico Chowk"
   },
   {
       "CityId": "28373",
       "CityName": "Sakchi"
   },
   {
       "CityId": "28460",
       "CityName": "Salcete"
   },
   {
       "CityId": "28690",
       "CityName": "Sanchi"
   },
   {
       "CityId": "28691",
       "CityName": "Sanchi (rsn)"
   },
   {
       "CityId": "28692",
       "CityName": "Sanchor Rj"
   },
   {
       "CityId": "28693",
       "CityName": "Sancoale"
   },
   {
       "CityId": "28694",
       "CityName": "Sancordem Goa"
   },
   {
       "CityId": "29192",
       "CityName": "Satch Nagar"
   },
   {
       "CityId": "29193",
       "CityName": "Satchand"
   },
   {
       "CityId": "29530",
       "CityName": "Serchhip"
   },
   {
       "CityId": "30412",
       "CityName": "Silchar"
   },
   {
       "CityId": "30618",
       "CityName": "Sircilla"
   },
   {
       "CityId": "31028",
       "CityName": "Sricity"
   },
   {
       "CityId": "31078",
       "CityName": "Srrcc"
   },
   {
       "CityId": "31571",
       "CityName": "Taichari Fata"
   },
   {
       "CityId": "31656",
       "CityName": "Talcher"
   },
   {
       "CityId": "31817",
       "CityName": "Tancha"
   },
   {
       "CityId": "31818",
       "CityName": "Tanchha"
   },
   {
       "CityId": "32173",
       "CityName": "Thachanallur"
   },
   {
       "CityId": "32401",
       "CityName": "Thickanamcode"
   },
   {
       "CityId": "32402",
       "CityName": "Thickanamcode (tamil Nadu)"
   },
   {
       "CityId": "32887",
       "CityName": "Topchanchi"
   },
   {
       "CityId": "32924",
       "CityName": "Traci"
   },
   {
       "CityId": "32942",
       "CityName": "Treching Ground (ind)"
   },
   {
       "CityId": "32947",
       "CityName": "Trichur"
   },
   {
       "CityId": "32948",
       "CityName": "Trichur Bye Pass"
   },
   {
       "CityId": "32949",
       "CityName": "Trichur Mannuthy Bypass"
   },
   {
       "CityId": "32950",
       "CityName": "Trichur Mannuthy Junction"
   },
   {
       "CityId": "32951",
       "CityName": "Trichy"
   },
   {
       "CityId": "32952",
       "CityName": "Trichy Bhel"
   },
   {
       "CityId": "32953",
       "CityName": "Trichy Kattur"
   },
   {
       "CityId": "34119",
       "CityName": "Vasai East Panchavati Hotel()"
   },
   {
       "CityId": "34120",
       "CityName": "Vasai East Panchavati Hotel(mumbai)"
   },
   {
       "CityId": "35021",
       "CityName": "Warje Malwadi Chowk"
   },
   {
       "CityId": "EZST19891464F",
       "CityName": "Jeeyapuram(Trichy)"
   },
   {
       "CityId": "EZST168E2002I",
       "CityName": "Sirugamani(Trichy)"
   },
   {
       "CityId": "OPS1489",
       "CityName": "Mysore Ooty Package"
   },
   {
       "CityId": "OPS353",
       "CityName": "Velankanni (Package Tour)"
   },
   {
       "CityId": "OPS1001",
       "CityName": "Kanyakumari Package"
   },
   {
       "CityId": "OPS2229",
       "CityName": "Kerala divine centre"
   },
   {
       "CityId": "simply20624",
       "CityName": "Dharmjaygarh (Chhattisgarh)\t"
   },
   {
       "CityId": "simply15102",
       "CityName": "Erode Bypass (Chithode)"
   },
   {
       "CityId": "simply18379",
       "CityName": "Hydrabad Film City 1n 2d Luxury"
   },
   {
       "CityId": "simply2255",
       "CityName": "Twelve Days Package"
   },
   {
       "CityId": "simply2228",
       "CityName": "Kurukshetra Package"
   },
   {
       "CityId": "simply20852",
       "CityName": "John Deere (Factory)\t"
   },
   {
       "CityId": "simply15402",
       "CityName": "Ankleshwar Gidc"
   },
   {
       "CityId": "simply18378",
       "CityName": "Hydrabad Film City 1n 2d Delux"
   },
   {
       "CityId": "simply2246",
       "CityName": "Shirdi Ellora Caves Package"
   },
   {
       "CityId": "simply22964",
       "CityName": "Little Flower College"
   },
   {
       "CityId": "simply2375",
       "CityName": "Dharamshala Package"
   },
   {
       "CityId": "simply23716",
       "CityName": "Karaikal(Pondicherry)"
   },
   {
       "CityId": "simply3043",
       "CityName": "Kodai kanal Package 2night 3 Days"
   },
   {
       "CityId": "simply8683",
       "CityName": "Rameshwaram Package"
   },
   {
       "CityId": "simply3042",
       "CityName": "Kodai Kanal packege 1 night 2da"
   },
   {
       "CityId": "simply24587",
       "CityName": "Katra Ayodhya Chauraha"
   },
   {
       "CityId": "simply2632",
       "CityName": "Delhi(Delhi Local Sight Seen One Day)"
   },
   {
       "CityId": "simply2633",
       "CityName": "Delhi(Delhi Local Sight Seeing)"
   },
   {
       "CityId": "1458",
       "CityName": "Ashtavinayak Package"
   },
   {
       "CityId": "1459",
       "CityName": "Ashtavinayak(package)"
   },
   {
       "CityId": "2620",
       "CityName": "Bankhandi (himachal Pradesh)"
   },
   {
       "CityId": "3937",
       "CityName": "Bhimashankar Package"
   },
   {
       "CityId": "6644",
       "CityName": "Darlaghat (himachal Pradesh)"
   },
   {
       "CityId": "7277",
       "CityName": "Dewas By Pass (chouhan Nashta)"
   },
   {
       "CityId": "7526",
       "CityName": "Dharampur (himachal Pradesh)"
   },
   {
       "CityId": "10146",
       "CityName": "Gondal Gundala Chokdi"
   },
   {
       "CityId": "10618",
       "CityName": "Gundugolanu Junction"
   },
   {
       "CityId": "10971",
       "CityName": "Hanumangarh Junction"
   },
   {
       "CityId": "11928",
       "CityName": "Itanagar (arunachal Pradesh)"
   },
   {
       "CityId": "12023",
       "CityName": "Jaganadhapuram Cross Road"
   },
   {
       "CityId": "12741",
       "CityName": "Jeeyapuram (trichy)"
   },
   {
       "CityId": "14426",
       "CityName": "Kanyakumari  Package"
   },
   {
       "CityId": "14517",
       "CityName": "Karaikal (pondicherry)"
   },
   {
       "CityId": "14835",
       "CityName": "Karunya Nagar (coimbatore)"
   },
   {
       "CityId": "15314",
       "CityName": "Keilodhar (himachal Pradesh)"
   },
   {
       "CityId": "16302",
       "CityName": "Kinathukadavu, Coimbatore"
   },
   {
       "CityId": "16898",
       "CityName": "Kootampuli(tuticorin)"
   },
   {
       "CityId": "17384",
       "CityName": "Kudal Sangam Package"
   },
   {
       "CityId": "17629",
       "CityName": "Kumbhirgram(silchar Airport)"
   },
   {
       "CityId": "17869",
       "CityName": "Kurla Post Office"
   },
   {
       "CityId": "18295",
       "CityName": "Lambagaon (himachal Pradesh)"
   },
   {
       "CityId": "18503",
       "CityName": "Likabali (arunachal Pradesh)"
   },
   {
       "CityId": "20084",
       "CityName": "Manikaran (himachal Pradesh)"
   },
   {
       "CityId": "20211",
       "CityName": "Mantralayam (package Tour)"
   },
   {
       "CityId": "20662",
       "CityName": "Meghper (reliance)"
   },
   {
       "CityId": "21791",
       "CityName": "Munnar Alleppy Cochin 2n3d Dlx"
   },
   {
       "CityId": "21794",
       "CityName": "Munnar Alleppy Cochin 3n4d Lxy"
   },
   {
       "CityId": "23611",
       "CityName": "Niphad Sugar Factory"
   },
   {
       "CityId": "23763",
       "CityName": "North Goan Legacy Tour"
   },
   {
       "CityId": "24205",
       "CityName": "Padave Gram Panchayat"
   },
   {
       "CityId": "33790",
       "CityName": "Vaishno Devi Package"
   }
]

busesData={
 "TraceId": "580117a4-0c1b-44b8-88dd-81e8403c6e3d",
 "Status": {
     "Message": "ok",
     "Success": true
 },
 "AvailableBuses": [
     {
         "InventoryType": "",
         "RouteScheduleId": "2024041844287",
         "ServiceId": "2024041844287",
         "OperatorBaseFare": "1490.0, 1690.0",
         "Fare": "1500.00,1700.00",
         "NetFare": "1380.0000,1564.0000",
         "DepartureTime": "20:10",
         "ArrivalTime": "06:00",
         "AvailableSeats": 34,
         "OperatorName": "Morning Star Travels",
         "CancellationPolicy": "[{\"cutoffTime\":\"0 to 12\",\"refundInPercentage\":\"100 % \"},{\"cutoffTime\":\"12 to 24\",\"refundInPercentage\":\"50 % \"},{\"cutoffTime\":\"24 to 720\",\"refundInPercentage\":\"25 % \"}]",
         "BoardingPoints": [
             {
                 "Id": "28246",
                 "Location": "Nagole",
                 "Time": "17:10",
                 "OperatorPhone": ""
             },
             {
                 "Id": "294401",
                 "Location": "Uppal (Survey of India)",
                 "Time": "17:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "496320",
                 "Location": "Habsiguda (Metro Station)",
                 "Time": "17:20",
                 "OperatorPhone": ""
             },
             {
                 "Id": "294405",
                 "Location": "Tarnaka (Railway Degree College)",
                 "Time": "17:25",
                 "OperatorPhone": ""
             },
             {
                 "Id": "294442",
                 "Location": "Kothapet (Pvt Market)",
                 "Time": "18:00",
                 "OperatorPhone": ""
             },
         ],
         "DroppingPoints": [
             {
                 "Id": "294427",
                 "Location": "R M K College (RMK)",
                 "Time": "06:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "23062",
                 "Location": "Red hills",
                 "Time": "06:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "23698",
                 "Location": "MADHAVARAM",
                 "Time": "06:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "199905",
                 "Location": "DRJ Hospital",
                 "Time": "06:35",
                 "OperatorPhone": ""
             }
         ],
         "BusType": "2+1, Sleeper, AC",
         "PartialCancellationAllowed": false,
         "IdProofRequired": false,
         "OperatorId": "2024041844287",
         "CommPct": 0.0,
         "MTicketAllowed": false,
         "IsRtc": false,
         "IsOpTicketTemplateRequired": false,
         "IsOpLogoRequired": false,
         "IsFareUpdateRequired": false,
         "IsChildConcession": false,
         "IsGetLayoutByBpdp": false,
         "SupplierId": 2,
         "APIType": 4
     },
     {
         "InventoryType": "",
         "RouteScheduleId": "2024041831045",
         "ServiceId": "2024041831045",
         "OperatorBaseFare": "1419",
         "Fare": "1429.00",
         "NetFare": "1314.6800",
         "DepartureTime": "20:20",
         "ArrivalTime": "08:30",
         "AvailableSeats": 35,
         "OperatorName": "LIMOLINER",
         "CancellationPolicy": "[{\"cutoffTime\":\"0 to 6\",\"refundInPercentage\":\"No Cancellation % \"},{\"cutoffTime\":\"6 to 12\",\"refundInPercentage\":\"30 % \"},{\"cutoffTime\":\"12 to 24\",\"refundInPercentage\":\"20 % \"},{\"cutoffTime\":\"24 to 720\",\"refundInPercentage\":\"10 % \"}]",
         "BoardingPoints": [
             {
                 "Id": "15536",
                 "Location": "Kothapeta",
                 "Time": "20:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "5066",
                 "Location": "L B Nagar",
                 "Time": "20:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "61162",
                 "Location": "Vanasthalipuram",
                 "Time": "20:35",
                 "OperatorPhone": ""
             },
             {
                 "Id": "37259",
                 "Location": "Ramoji Film City",
                 "Time": "21:15",
                 "OperatorPhone": ""
             }
         ],
         "DroppingPoints": [
             {
                 "Id": "163850",
                 "Location": "Gummidipundi",
                 "Time": "07:20",
                 "OperatorPhone": ""
             },
             {
                 "Id": "61543",
                 "Location": "RMK COLLEGE",
                 "Time": "07:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "163849",
                 "Location": "Redhills Tollgate",
                 "Time": "07:35",
                 "OperatorPhone": ""
             },
             {
                 "Id": "163848",
                 "Location": "Madhavaram byepass",
                 "Time": "07:45",
                 "OperatorPhone": ""
             },
         ],
         "BusType": "2+1, Sleeper, AC, Non-Video",
         "PartialCancellationAllowed": false,
         "IdProofRequired": false,
         "OperatorId": "2024041831045",
         "CommPct": 0.0,
         "MTicketAllowed": false,
         "IsRtc": false,
         "IsOpTicketTemplateRequired": false,
         "IsOpLogoRequired": false,
         "IsFareUpdateRequired": false,
         "IsChildConcession": false,
         "IsGetLayoutByBpdp": false,
         "SupplierId": 2,
         "APIType": 4
     },
     {
         "InventoryType": "",
         "RouteScheduleId": "20240418148970",
         "ServiceId": "20240418148970",
         "OperatorBaseFare": "3000.0",
         "Fare": "3010.00",
         "NetFare": "2769.2000",
         "DepartureTime": "20:30",
         "ArrivalTime": "10:00",
         "AvailableSeats": 14,
         "OperatorName": "KBN Travels",
         "CancellationPolicy": "[{\"cutoffTime\":\"0 to 24\",\"refundInPercentage\":\"100 % \"},{\"cutoffTime\":\"24 to 72\",\"refundInPercentage\":\"60 % \"},{\"cutoffTime\":\"72 to 168\",\"refundInPercentage\":\"50 % \"},{\"cutoffTime\":\"168 to 720\",\"refundInPercentage\":\"40 % \"}]",
         "BoardingPoints": [
             {
                 "Id": "30131",
                 "Location": "kphb",
                 "Time": "19:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "35476",
                 "Location": "kukatpally ",
                 "Time": "19:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "2267",
                 "Location": "SR NAGAR",
                 "Time": "19:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "985",
                 "Location": "Ameerpet",
                 "Time": "19:40",
                 "OperatorPhone": ""
             },
             {
                 "Id": "30136",
                 "Location": "panjagutta",
                 "Time": "19:45",
                 "OperatorPhone": ""
             },
             {
                 "Id": "15346",
                 "Location": "LakdikaPool",
                 "Time": "19:50",
                 "OperatorPhone": ""
             },
             {
                 "Id": "7149",
                 "Location": "nampally",
                 "Time": "20:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "43866",
                 "Location": "AFZALGANJ",
                 "Time": "20:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "5040",
                 "Location": "Dilsukhnagar",
                 "Time": "20:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "191302",
                 "Location": "LB Nagar",
                 "Time": "20:45",
                 "OperatorPhone": ""
             }
         ],
         "DroppingPoints": [
             {
                 "Id": "303186",
                 "Location": "Koyambeedu",
                 "Time": "10:00",
                 "OperatorPhone": ""
             }
         ],
         "BusType": "2+1, Seater, Non-AC",
         "PartialCancellationAllowed": false,
         "IdProofRequired": false,
         "OperatorId": "20240418148970",
         "CommPct": 0.0,
         "MTicketAllowed": false,
         "IsRtc": false,
         "IsOpTicketTemplateRequired": false,
         "IsOpLogoRequired": false,
         "IsFareUpdateRequired": false,
         "IsChildConcession": false,
         "IsGetLayoutByBpdp": false,
         "SupplierId": 2,
         "APIType": 4
     },
     {
         "InventoryType": "",
         "RouteScheduleId": "20240418148997",
         "ServiceId": "20240418148997",
         "OperatorBaseFare": "3000.0",
         "Fare": "3010.00",
         "NetFare": "2769.2000",
         "DepartureTime": "20:30",
         "ArrivalTime": "10:00",
         "AvailableSeats": 14,
         "OperatorName": "KBN Travels",
         "CancellationPolicy": "[{\"cutoffTime\":\"0 to 24\",\"refundInPercentage\":\"100 % \"},{\"cutoffTime\":\"24 to 72\",\"refundInPercentage\":\"60 % \"},{\"cutoffTime\":\"72 to 168\",\"refundInPercentage\":\"50 % \"},{\"cutoffTime\":\"168 to 720\",\"refundInPercentage\":\"40 % \"}]",
         "BoardingPoints": [
             {
                 "Id": "30131",
                 "Location": "kphb",
                 "Time": "19:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "35476",
                 "Location": "kukatpally ",
                 "Time": "19:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "2267",
                 "Location": "SR NAGAR",
                 "Time": "19:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "985",
                 "Location": "Ameerpet",
                 "Time": "19:40",
                 "OperatorPhone": ""
             },
             {
                 "Id": "30136",
                 "Location": "panjagutta",
                 "Time": "19:45",
                 "OperatorPhone": ""
             },
             {
                 "Id": "15346",
                 "Location": "LakdikaPool",
                 "Time": "19:50",
                 "OperatorPhone": ""
             },
             {
                 "Id": "7149",
                 "Location": "nampally",
                 "Time": "20:00",
                 "OperatorPhone": ""
             },
             {
                 "Id": "43866",
                 "Location": "AFZALGANJ",
                 "Time": "20:15",
                 "OperatorPhone": ""
             },
             {
                 "Id": "5040",
                 "Location": "Dilsukhnagar",
                 "Time": "20:30",
                 "OperatorPhone": ""
             },
             {
                 "Id": "191302",
                 "Location": "LB Nagar",
                 "Time": "20:45",
                 "OperatorPhone": ""
             }
         ],
         "DroppingPoints": [
             {
                 "Id": "303186",
                 "Location": "Koyambeedu",
                 "Time": "10:00",
                 "OperatorPhone": ""
             }
         ],
         "BusType": "2+1, Seater, Non-AC",
         "PartialCancellationAllowed": false,
         "IdProofRequired": false,
         "OperatorId": "20240418148997",
         "CommPct": 0.0,
         "MTicketAllowed": false,
         "IsRtc": false,
         "IsOpTicketTemplateRequired": false,
         "IsOpLogoRequired": false,
         "IsFareUpdateRequired": false,
         "IsChildConcession": false,
         "IsGetLayoutByBpdp": false,
         "SupplierId": 2,
         "APIType": 4
     }
 ]
}
filterSourceCities(){
 this.showSourceModel=true
 if(this.model.source.length!=0){
  this.sourceCities= this.citiesData.filter((city)=>{
   return  city.CityName.toLowerCase().includes(this.model.source.toLowerCase())
  }  
 )
 }
}

filterDestinationCities(){
 this.showDestinationModel=true
 if(this.model.destination.length!=0){
   this.destinationCities= this.citiesData.filter((city)=>{
    return  city.CityName.toLowerCase().includes(this.model.destination.toLowerCase())
   }  
  )
  console.log(this.destinationCities)
  }
}

submitSource(source:any){
this.model.source=source.CityName
this.showSourceModel=false
}
submitDestination(destination:any){  
 this.model.destination=destination.CityName
 this.showDestinationModel=false
}
searchBuses(){

}
sourceGetFocus(){
 if(this.showDestinationModel){
   this.showDestinationModel=false
 }
}
destinationGetFocus(){
 if(this.showSourceModel){
   this.showSourceModel=false
 }
}
}

