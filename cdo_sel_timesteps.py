# Use for selecting timesteps corresponding to 2.5th and 97.5th percentiles of bootstrap 
# anomalous NAO indices associated with ENSO (El Nino minus La Nina).
# See bootstrap_naoindex.m

# Orig El Nino years
elninoyears = [1897,1900,1903,1912,1914,1915,1919,1926,1931,1941,1942,1958,1966,1969,1987,1988,1991,1992,1995,2003,2005,2007,2010]
laninayears = [1870,1872,1873,1874,1876,1883,1887,1890,1893,1894,1899,1910,1916,1917,1918,1934,1935,1943,1950,1951,1955,1956,1968,1971,1974,1976,1985,1989,1999,2000,2008,2011,2012]
# 2.5th perc. Found using bootstrap_naoindex.m
entimesteps = [21,8,9,14,3,1,10,12,8,1,16,2,13,4,12,13,9,4,12,15,5,5,20]
lntimesteps = [28,33,30,16,18,6,19,28,3,30,18,12,14,20,7,5,31,4,7,16,24,28,3,29,12,4,27,14,20,29,33,13,1]
# 97.5th perc. Found using bootstrap_naoindex.m
#entimesteps = [18,20,8,13,16,3,18,4,23,23,17,18,8,23,21,14,22,13,8,20,5,8,16]
#lntimesteps = [3,33,18,1,13,17,22,27,8,29,5,21,2,19,6,21,13,8,2,11,20,20,5,23,25,8,18,2,19,25,17,11,18]

print "rm -f rub*.nc"
count = 1
for en in entimesteps:
 print "cdo selyear,"+str(elninoyears[en-1])+" prmslortnao.mon.mean_janfebmarmean_anom_1870_2014.nc rub"+str(count)+".nc"
 count+=1
print "cdo -O ensmean rub*.nc elnino.nc"
print "cdo -O ensvar rub*.nc prmslpronao_elninovar_janfebmarmean_nao2_5thprctile.nc"


print "rm -f rub*.nc"
count = 1
for ln in lntimesteps:
 print "cdo selyear,"+str(laninayears[ln-1])+" prmslortnao.mon.mean_janfebmarmean_anom_1870_2014.nc rub"+str(count)+".nc"
 count+=1
print "cdo -O ensmean rub*.nc lanina.nc"
print "cdo -O ensvar rub*.nc prmslpronao_laninavar_janfebmarmean_for_nao2_5thprctile.nc"

print "cdo -O sub elnino.nc lanina.nc prmslpronao_elninominuslanina_janfebmarmean_for_nao2_5thprctile.nc"