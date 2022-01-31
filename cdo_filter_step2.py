years = range(185,202)

for y in years:
# print "cdo -O mergetime air."+str(y)+"?_sellevel250.nc air."+str(y)+"0s_sellevel250.nc"
 print "cdo -O bandpass,45.625,182.5 -del29feb air."+str(y)+"0s_sellevel100.nc air."+str(y)+"0s_sellevel100_2to8daybandpass.nc"
# print "cdo -O mergetime vwnd."+str(y)+"?_sellevel250.nc vwnd."+str(y)+"0s_sellevel250.nc" 
 print "cdo -O bandpass,45.625,182.5 -del29feb vwnd."+str(y)+"0s_sellevel100.nc vwnd."+str(y)+"0s_sellevel100_2to8daybandpass.nc"
