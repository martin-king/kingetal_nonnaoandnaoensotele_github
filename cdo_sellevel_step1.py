years = range(1850,2015)

for y in years:
 print "cdo -O sellevel,250 air."+str(y)+".nc air."+str(y)+"_sellevel250.nc"
