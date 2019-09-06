function calculateNetRent(){
  // console.log($('#gross_rent').val());
  var grossRent = $('#gross_rent').val();
  var gr_mon = grossRent;
  var gr_year = gr_mon*12;
  var ac_mon = grossRent-(grossRent*0.1);
  var ac_year = ac_mon*12;
  var atff_mon = ac_mon-(grossRent*0.05);
  var atff_year = ac_year*12;
  var gsec_mon = atff_mon-12.5;
  var gsec_year = atff_year - 150;
  var agr_mon = gsec_mon-50;
  var agr_year = gsec_year-600;
  var avatc_mon = agr_mon-(grossRent*0.2);
  var avatc_year = avatc_mon*12;
  var mavp_mon = avatc_mon-(grossRent*0.015);
  var mavp_year = mavp_mon*12;

  $('.gr_1').html(gr_mon);;
  $('.gr_2').html(gr_year);;
  $('.gr_3').html(gr_mon);;
  $('.gr_4').html(gr_year);;
  $('.ac_3').html(ac_mon);
  $('.ac_4').html(ac_year);
  $('.atff_3').html(atff_mon);
  $('.atff_4').html(atff_year);
  $('.gsec_3').html(gsec_mon);
  $('.gsec_4').html(gsec_year);
  $('.agr_3').html(agr_mon);
  $('.agr_4').html(agr_year);
  $('.avatc_3').html(avatc_mon);
  $('.avatc_4').html(avatc_year);
  $('.mavp_3').html(mavp_mon);
  $('.mavp_4').html(mavp_year);
}