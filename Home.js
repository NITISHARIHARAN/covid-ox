import React,{useState ,useEffect} from 'react';
import './App.css';
import InfoBox from './InfoBox';
import{FormControl,MenuItem,Select ,Card, CardContent}from "@material-ui/core";
import Map from './Map';
import Table from './Table';
import { sortData ,prettyPrintStat } from './util';
import LineGraph from './LineGraph.js';
import "leaflet/dist/leaflet.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


function Home() {
 const[countries, setCountries]=useState([]);
 const[country , setCountry]=useState('worldwide');
 const[countryInfo , setCountryInfo]=useState({});
 const[tableData,setTableData]=useState([]);
 const[mapCenter,setMapCenter]=useState({ lat: 34.80746, lng: -40.4796 });
 const[mapZoom,setMapZoom]=useState(3);
 const [mapCountries, setMapCountries] = useState([]);
 const [casesType, setCasesType] = useState("cases");
 useEffect(()=>{
 fetch("https://disease.sh/v3/covid-19/all")
 .then (response=>response.json())
 .then(data=>{
 setCountryInfo(data);
 })
 },[])

 useEffect(() => {
 const getCountriesData=async () => {
 await fetch("https://disease.sh/v3/covid-19/countries")
 .then((response)=> response.json())
 .then((data) =>{
 const countries=data.map((country)=>(
 {
 name:country.country,
 value:country.countryInfo.iso2
 }));
 const sortedData=sortData(data)
 setTableData(sortedData);
 setMapCountries(data);
 setCountries(countries);
 });
 };
 getCountriesData();
 }, []);

 const onCountryChange=async(event)=>{
 const countryCode=event.target.value;
 const url =
 countryCode==="worldwide"
 ?'https://disease.sh/v3/covid-19/all'
 :`https://disease.sh/v3/covid-19/countries/${countryCode}`
 await fetch(url)
 .then(response=>response.json())
 .then((data)=>{
 setCountry(countryCode);
 setCountryInfo(data);
 setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
 setMapZoom(4);
 });
 };

 console.log('COUNTRY_INFO>>>',countryInfo) 

 return (
 <div className="app">
 <div className="app__left">
 <div className="app__header">
 <h1><b><u>COVID-OX</u></b></h1>
 <FormControl className="app__dropdown">
 <Link to='/list'>Your Button</Link>
 <Select variant="outlined" onChange={onCountryChange} value={country}>
 <MenuItem value="worldwide" style={{ color: 'black' }} color="textSecondary">Worldwide</MenuItem>
 {
 countries.map(country =>(
 <MenuItem value={country.value}>{country.name}</MenuItem>
 ))
 }
 </Select>
 </FormControl>
 </div>
 <div className="app__stats" >
 <InfoBox isRed active={casesType === "cases"} onClick={(e) => setCasesType("cases")} title="CoronaVirus
Cases" cases={prettyPrintStat (countryInfo.todayCases)} total={prettyPrintStat (countryInfo.cases)} />
 <InfoBox active={casesType === "recovered"} onClick={(e) => setCasesType("recovered")} title="Recoverd"
cases={prettyPrintStat (countryInfo.todayRecovered)} total={prettyPrintStat (countryInfo.recovered)}/>
 <InfoBox isRed active={casesType === "deaths"} onClick={(e) => setCasesType("deaths")}title="Deaths"
cases={prettyPrintStat (countryInfo.todayDeaths)} total={prettyPrintStat (countryInfo.deaths)}/>
 </div>
 {/*map*/}
 <Map
 casesType={casesType}
 countries={mapCountries}
 center={mapCenter}
 zoom={mapZoom}/>
 </div >
 <Card className="app__right">
 <CardContent>
 <h3><b><u>LIVE CASES BY COUNTRY</u></b></h3>
 <Table countries={tableData}/>
 <h3><b><u>world wide new {casesType}</u></b></h3>
 <LineGraph className="app_graph" casesType={casesType}/>
 </CardContent>
 </Card>
 </div>
 );
}
export default Home;