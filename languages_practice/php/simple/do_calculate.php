<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
  <title>Bean Counter Results</title>
</head>
<body>
<?php // variable declarations and calculations
$sales_tax = .0825;
$sub_total = $_POST[price] * $_POST[quantity];
$sales_tax_amount = $sub_total * $sales_tax;
$sales_tax_pct = $sales_tax * 100;
$grand_total = $sub_total + $sales_tax_amount;
//create variables to hold formatted strings of the numeric values
$fmt_price = sprintf("%0.2f",$_POST[price]);
$fmt_sub_total = sprintf("%0.2f",$sub_total);
$fmt_sales_tax_amount = sprintf("%0.2f",$sales_tax_amount);
$fmt_grand_total = sprintf("%0.2f", $grand_total);
//create the web page
echo "<p>You ordered $_POST[quantity] bag";
if($_POST[quantity] != 1) {
	echo "s";
}
echo " of coffee.</p>";
echo "<p>Bags of coffee are \$$fmt_price each.</p>";
echo "<p>Your subtotal is \$$fmt_sub_total.</p>";
echo "<p>Sales tax is $sales_tax_pct% in this location.</p>";
echo "<p>\$$fmt_sales_tax_amount has been added to your order.</p>";
echo "<p>You owe \$$fmt_grand_total for your coffee.</p>";
?> 
<hr/><br/>
<a href="../">Home</a>
</body>
</html>