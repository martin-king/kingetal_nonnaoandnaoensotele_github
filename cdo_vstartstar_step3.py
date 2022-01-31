years = range(185,202)

monnum='03'
monalp='mar'

for y in years:
 print "cdo -O selmon,"+monnum+" air."+str(y)+"0s_sellevel100_2to8daybandpass.nc rub_air_"+str(y)+".nc" 
 print "cdo -O selmon,"+monnum+" vwnd."+str(y)+"0s_sellevel100_2to8daybandpass.nc rub_vwnd_"+str(y)+".nc"

print "cdo -O mergetime rub_air*.nc air.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc"
print "cdo -O zonmean air.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc air.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean.nc"
print "cdo -O enlarge,air.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc air.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean.nc air.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean_enlarge.nc"
print "cdo -O sub air.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc air.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean_enlarge.nc airstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc"

print "cdo -O mergetime rub_vwnd*.nc vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc"
print "cdo -O zonmean vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean.nc"
print "cdo -O enlarge,vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean.nc vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean_enlarge.nc"
print "cdo -O sub vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+".nc vwnd.1851_2014_sellevel100_2to8daybandpass_"+monalp+"_zonmean_enlarge.nc vwndstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc"

print "cdo -O mul vwndstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc airstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc vwndstarairstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc"
print "cdo -O monmean vwndstarairstar100.1851_2014_"+monalp+"_day_2to8daybandpass.nc vwndstarairstar100.1851_2014_"+monalp+"_mon_2to8daybandpass.nc"
