import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein,oxygen,amount) {
  return { name, calories, fat, carbs, protein,oxygen, amount };
}

const rows = [
  createData( "Dedicated COVID Hospitals / DCH","1","Ariyalur","Govt. Medical College Hospital Ariyalur","100%","80%","20%"),
  createData( "Dedicated COVID Hospitals / DCH","2","Ariyalur","A.S Hospital","100%","100%","0%"),
  createData("Dedicated COVID Hospitals / DCH","3","Chengalpattu","Govt. Medical College Hospital at Chengalpattu","100%","70%","30%"),
  createData("Dedicated COVID Hospitals / DCH","4","Chengalpattu","Govt. T.B. Hospital Tambaram","100%","90%","10%"),
  createData("Dedicated COVID Hospitals / DCH","5","Chengalpattu","Govt. Hospital Tambaram at Chrompet","100%","50%","50%"),
  createData("Dedicated COVID Hospitals / DCH","6","Chengalpattu","Shri Sathya Sai Medical College And Research Institute","100%","25%","75%"),
  createData( "Dedicated COVID Hospitals / DCH","101","Namkakal","Govt. Hospital at Namakkal","100%","21%","79%"),
  createData( "Dedicated COVID Hospitals / DCH","102","Namakkal","Vivekanandha Medical Care Hospital Namakkal Town","100%","34%","66%"),
  createData("Dedicated COVID Hospitals / DCH","103","Namakkal","Thangam Hospital Namakkal Town","100%","81%","19%"),
  createData("Dedicated COVID Hospitals / DCH","104","Perambalur","Govt. District Head Quarters Hospital","100%","46%","54%"),
  createData("Dedicated COVID Hospitals / DCH","105","Perambalur","Dhanalakshmisrinivasan Medical College And Hospital","100%","62%","38%"),
  createData("Dedicated COVID Hospitals / DCH","106","Pudukkottai","Govt. Medical College Pudukkottai ","100%","47%","53%"),
  createData( "Dedicated COVID Hospitals / DCH","107","Pudukkottai","Ranees Govt. Hospital  ","100%","38%","62%"),
  createData( "Dedicated COVID Hospitals / DCH","108","Pudukkottai","Aranthangi_DHQS","100%","57%","43%"),
  createData("Dedicated COVID Hospitals / DCH","109","Pudukkottai","Sree Vijay Hospital","100%","75%","25%"),
  createData("Dedicated COVID Hospitals / DCH","110","Ramanathapuram","Govt. Medical College Hospital Ramanathapuram","100%","23%","77%"),
  createData("Dedicated COVID Hospitals / DCH","111","Ranipet","WalajapetDHQS","100%","64%","36%"),
  createData("Dedicated COVID Hospitals / DCH","112","Salem","Govt. Mohan Kumaramangalam Medical College Hospital Salem","100%","88%","12%"),
  createData( "Dedicated COVID Hospitals / DCH","113","Salem","Government District Head Quarters Hospital Mettur","100%","85%","25%"),
  createData( "Dedicated COVID Hospitals / DCH","114","Salem","Annapoorna Medical College &amp;Hospital","100%","100%","0%"),
  createData("Dedicated COVID Hospitals / DCH","115","Salem","Vinyaga Mission Kirubanandha Variyar Medical College Hospital","100%","77%","23%"),
  createData("Dedicated COVID Hospitals / DCH","116","Salem","Sri Gokulam Hospital Salem Town","100%","99%","01%"),
  createData("Dedicated COVID Hospitals / DCH","117","Salem","Dharan Hospital Seelanaickanpatti","100%","90%","10%"),
  createData("Dedicated COVID Hospitals / DCH","118","Salem","Manipal Hospital Dalmia Brd Salem Town","100%","95%","05%"),
  createData("Dedicated COVID Hospitals / DCH","119","Salem","SKS Hospital Salem Town","100%","83%","17%"),
  createData( "Dedicated COVID Hospitals / DCH","120","Salem","Kauvery Hospital Seelanaickenpatti Salem Town","100%","57%","43%"),
  createData( "Dedicated COVID Hospitals / DCH","121","Salem","Shanmuga Hospt Cancer Ins Saradha Cll Rd Salem Town","100%","72%","28%"),
  createData("Dedicated COVID Hospitals / DCH","122","Salem","Vinayaka Mission Super Specialty Hospitals Pvt Ltd","100%","54%","46%"),
  createData("Dedicated COVID Hospitals / DCH","123","Sivaganga","Govt. Medical College Hospital Sivaganga","100%","35%","65%"),
  createData("Dedicated COVID Hospitals / DCH","124","Sivaganga","KaraikudiDHQS","100%","19%","81%"),
  createData("Dedicated COVID Hospitals / DCH","125","Tenkasi","Govt District Head Quarters Hospital Tenkasi","100%","77%","23%"),
  createData( "Dedicated COVID Hospitals / DCH","126","Thanjavur","Govt. Medical College Hospital at Thanjavur","100%","84%","16%"),
  createData( "Dedicated COVID Hospitals / DCH","127","Thanjavur","Govt. Raja Mirasudar Hospital at Thanjavur","100%","86%","14%"),
  createData("Dedicated COVID Hospitals / DCH","128","Thanjavur","Govt. Head Quarters Hospital at Kumbakonam","100%","93%","07%"),
  createData("Dedicated COVID Hospitals / DCH","129","Thanjavur","PattukottaiSDH","100%","49%","51%"),
  createData("Dedicated COVID Hospitals / DCH","130","The Nilgiris","Govt. Medical College Hospital Udhagamandalam","100%","57%","43%"),
  createData("Dedicated COVID Hospitals / DCH","131","Theni","Govt. Medical College Theni","100%","83%","17%"),
  createData( "Dedicated COVID Hospitals / DCH","132","Theni","Governement Hospital NRT Theni","100%","90%","10%"),
  createData( "Dedicated COVID Hospitals / DCH","133","Theni","Periyakulam_DHQS","100%","100%","0%"),
  createData("Dedicated COVID Hospitals / DCH","134","Thoothukudi","Govt. Medical college Hospital Thoothukudi","100%","88%","12%"),
  createData("Dedicated COVID Hospitals / DCH","135","Thoothukudi","Govt District Head Quarters Hospital Kovilpatti","100%","71%","29%"),
  createData("Dedicated COVID Hospitals / DCH","136","Thoothukudi","Sri Hospitals","100%","55%","45%"),
  createData("Dedicated COVID Hospitals / DCH","137","Tiruchirappalli","KAPV Government Medical College","100%","40%","60%"),
  createData( "Dedicated COVID Hospitals / DCH","138","Tiruchirappalli","Govt. District Head Quarters Hospital Manapparai","100%","77%","23%"),
  createData( "Dedicated COVID Hospitals / DCH","139","Tiruchirappalli","Trichy Srm Medical College Hospital And Research Centre","100%","100%","0%"),
  createData("Dedicated COVID Hospitals / DCH","140","Tiruchirappalli","Kavery Medical Centre And Hospital Tiruchirapalli Town","100%","47%","53%"),
  createData("Dedicated COVID Hospitals / DCH","141","Tiruchirappalli","Apollo Hospital","100%","85%","25%"),
  createData("Dedicated COVID Hospitals / DCH","142","Tirunelveli","Govt. Medical College Hospital Tirunelveli","100%","98%","02%"),
  createData("Dedicated COVID Hospitals / DCH","143","Tirupathur","TirupathurSDH","100%","87%","13%"),
  createData( "Dedicated COVID Hospitals / DCH","144","Tiruppur","Govt. Medical College Hospital Tiruppur","100%","33%","67%"),
  createData( "Dedicated COVID Hospitals / DCH","145","Tiruppur","Govt. Hospital Udumalai","100%","62%","38%"),
  createData("Dedicated COVID Hospitals / DCH","146","Tiruvallur","Govt. Medical College and Hospital Tiruvallur","100%","91%","07%"),
  createData("Dedicated COVID Hospitals / DCH","147","Tiruvallur","A.C.S. Medical College And Hospital","100%","92%","08%"),
  createData("Dedicated COVID Hospitals / DCH","148","Tiruvallur","Dr Mehtas Hospitals VelampanchavadyChennai Town New Unit","100%","60%","40%"),
  createData("Dedicated COVID Hospitals / DCH","149","Tiruvallur","Apollo Hospitals AyyanambakkamTiruvallur Town","100%","68%","32%"),
  createData( "Dedicated COVID Hospitals / DCH","150","Tiruvannamalai","Govt. Medical College Hospital Tiruvannamalai","100%","43%","57%"),
  createData( "Dedicated COVID Hospitals / DCH","151","Tiruvannamalai","Tiruvannamalai (Old)","100%","100%","0%"),
  createData("Dedicated COVID Hospitals / DCH","152","Tiruvannamalai","Ramana Maharishi Hospital Tiruvannamalai Town","100%","70%","30%"),
  createData("Dedicated COVID Hospitals / DCH","153","Tiruvannamalai","CheyyarDHQS","100%","66%","34%"),
  createData("Dedicated COVID Hospitals / DCH","154","Tiruvarur","Govt. Medical College Hospital at Tiruvarur","100%","97%","3%"),
  createData("Dedicated COVID Hospitals / DCH","155","Tiruvarur","Mannargudi_DHQS","100%","75%","25%"),
  createData("Dedicated COVID Hospitals / DCH","156","Vellore","Govt. Vellore Medical College and Hospital","100%","95%","5%"),
  createData("Dedicated COVID Hospitals / DCH","157","Vellore","Christian Medical College","100%","93%","7%"),
  createData("Dedicated COVID Hospitals / DCH","158","Vellore","Scudder HospitalVellore Town","100%","81%","19%"),
  createData("Dedicated COVID Hospitals / DCH","159","Vellore","Sri Narayani Hospital and Research Centre Vellore Town","100%","76%","24%"),
  createData("Dedicated COVID Hospitals / DCH","160","Villupuram","Govt. Villupuram Medical College and Hospital","100%","72%","28%"),
  createData("Dedicated COVID Hospitals / DCH","161","Villupuram","Spl. Hospital for COVID19 at Villupuram (Old GH)","100%","56%","44%"),
  createData("Dedicated COVID Hospitals / DCH","162","Villupuram","S A Hospital Sankarapuram Villupuram Town","100%","77%","23%"),
  createData("Dedicated COVID Hospitals / DCH","163","Villupuram","Annai Medical Centre","100%","88%","12%"),
  createData("Dedicated COVID Hospitals / DCH","164","Villupuram","Lotus Paediatric Emergency Centre","100%","29%","71%"),
  createData("Dedicated COVID Hospitals / DCH","165","Virudhunagar","Govt. Medical College Hospital Virudhunagar","100%","77%","23%"),
  createData("Dedicated COVID Hospitals / DCH","166","Virudhunagar","Rajapalayam_SDH","100%","35%","65%"),
  



];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>CATEGORY</TableCell>
            <TableCell align="right">S.NO</TableCell>
            <TableCell align="right">DISTRICT</TableCell>
            <TableCell align="right">NAME OF THE HOSPITAL</TableCell>
            <TableCell align="right">AMOUNT OF OXYGEN PRESENT</TableCell>
            <TableCell align="right">AMOUNT OF OXYGEN USAGE PERDAY</TableCell>
            <TableCell align="right">REMAINING AMOUNT OF OXYGEN</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.oxygen}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}