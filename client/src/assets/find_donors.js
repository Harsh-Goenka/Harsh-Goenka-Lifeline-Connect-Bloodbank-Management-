function test(){
  alert("sfe");
  var dropdown=document.getElementById("bloodgroup")
  var selectedValue=dropdown.ariaValueMax;
  var table=document.getElementById('donors-table')
  var rows= table.getElementsByTagName("tr");

  for (var i=1;i<rows.length;i++)
  {
    var row=rows[i];
    var bloodgroup=row.cells[1].textContent.trim();

    if (selectedValue==="all" || bloodgroup===selectedValue)
    {
      row.style.display="";
    }
    else{
      row.style.display="none"
    }
  }
}



