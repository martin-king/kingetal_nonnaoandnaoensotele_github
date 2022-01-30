import numpy as np

np.random.seed(None)

trialtot=range(1,2)
trialyrs=range(1870,2015)

#DJF EN
#mixed el nino exclude cp and extreme DJF 12 events (hadisst_elninomixedmodoki_djf_1869_2016.tx). 
#elninoyears=np.array([1897,1900,1912,1914,1915,1919,1926,1931,1942,1966,1987,2007])
#cp el nino DJF 11 events. elninoyears=np.array([1903,1941,1958,1969,1988,1991,1992,1995,2003,2005,2010])
#mixed plus cp el nino DJF 23 events. 
elninoyears=np.array([1897,1900,1912,1914,1915,1919,1926,1931,1942,1966,1987,2007,1903,1941,1958,1969,1988,1991,1992,1995,2003,2005,2010])
#extreme el nino DJF 5 events. elninoyears=np.array([1878,1889,1973,1983,1998])
#OND EN
#mixed el nino exclude cp and extreme OND 20 events. elninoyears=np.array([1888,1896,1899,1902,1904,1905,1911,1913,1914,1918,1925,1930,1941,1951,1957,1965,1969,1976,1987,2006])
#cp el nino OND 10 events. elninoyears=np.array([1940,1977,1986,1990,1991,1994,2002,2004,2009,2014])
#mixed plus cp el nino OND 30 events. 
#elninoyears=np.array([1888,1896,1899,1902,1904,1905,1911,1913,1914,1918,1925,1930,1941,1951,1957,1965,1969,1976,1987,2006,1940,1977,1986,1990,1991,1994,2002,2004,2009,2014])

#DJF LN 
#mixed la nina exclude cp DJF 18 events. 
#laninayears=np.array([1872,1873,1874,1876,1883,1887,1893,1910,1916,1917,1918,1935,1950,1955,1956,1968,1971,1985])
#cp la nina DJF 15 events. 
#laninayears=np.array([1870,1890,1894,1899,1934,1943,1951,1974,1976,1989,1999,2000,2008,2011,2012])
#mixed plus cp la nina DJF 33 events.
laninayears=np.array([1872,1873,1874,1876,1883,1887,1893,1910,1916,1917,1918,1935,1950,1955,1956,1968,1971,1985,1870,1890,1894,1899,1934,1943,1951,1974,1976,1989,1999,2000,2008,2011,2012])
#OND LN
#mixed la nina exclude cp OND 24 events. laninayears=np.array([1870,1872,1873,1875,1892,1903,1908,1909,1916,1922,1924,1942,1949,1950,1954,1955,1956,1967,1970,1971,1999,2005,2007])
#cp la nina OND 16 events. laninayears=np.array([1874,1879,1886,1889,1890,1893,1910,1933,1964,1973,1974,1975,1984,1988,1998,2010])
#mixed plus cp la nina OND 40 events. 
#laninayears=np.array([1870,1872,1873,1875,1892,1903,1908,1909,1916,1922,1924,1942,1949,1950,1954,1955,1956,1967,1970,1971,1999,2005,2007,1874,1879,1886,1889,1890,1893,1910,1933,1964,1973,1974,1975,1984,1988,1998,2010])


for trial in trialtot:
   print "echo "+str(trial)
   if trial !=1:
    el = np.random.choice(elninoyears, size=elninoyears.shape, replace=True)
#    sampyrs = np.random.choice(trialyrs, size=56, replace=False) 
#    el = sampyrs[0:23]
    el = sorted(el)
#    elyears=','.join(str(ee) for ee in el)
   
#    la = np.random.choice(laninayears, size=laninayears.shape, replace=True)
#    la = sampyrs[23:56]
#    la = sorted(la)
#    layears=','.join(str(ll) for ll in la)
   else:
    el = elninoyears
    la = laninayears

   count=1
   print "rm -f rub*.nc"
   for year in el:
    print "cdo -s -O selyear,"+str(year)+" prmslpronao.mon.mean_janfebmarmean_anom_1870_2014.nc rub"+str(count)+".nc" ##
    count+=1
   print "cdo -O ensmean rub*.nc elnino.nc"
#   print "cdo -O ensvar rub*.nc elninovar_"+str(trial).rjust(4,'0')+".nc"
   print "cdo -O ensvar rub*.nc elninovar.nc"
#   print "cdo -O mergetime rub*.nc elnino.nc"  

   count=1
   print "rm -f rub*.nc"
   for year in la:
    print "cdo -s -O selyear,"+str(year)+" prmslpronao.mon.mean_janfebmarmean_anom_1870_2014.nc rub"+str(count)+".nc" ##
    count+=1
   print "cdo -O ensmean rub*.nc lanina.nc"    
#   print "cdo -O ensvar rub*.nc laninavar_"+str(trial).rjust(4,'0')+".nc"
   print "cdo -O ensvar rub*.nc laninavar.nc"     
    
#ensocomp.nc contains enso anomaly for one trial
#   print "cdo -O sub elnino.nc lanina.nc ensocomp_"+str(trial).rjust(4,'0')+".nc"  
   print "cdo -O sub elnino.nc lanina.nc ensocomp.nc" 
#   print "cdo -O mergetime rub*.nc lanina.nc"

#then I want to put all those anomalies together
#   if trial==1:
#    print "mv ensocomp.nc ensomixedpluscpmerge_hgt200pronao_2000bootstraps_allyears18702014_jfm.nc" ##
##
#    print "mv elninovar.nc elninomixedpluscpvarmerge_hgt200pronao_2000bootstraps_allyears18702014_jfm.nc" ##
#    print "mv laninavar.nc laninamixedpluscpvarmerge__hgt200pronao_2000bootstraps_allyears18702014_jfm.nc" ##
#    print "ncatted -a calendar,time,o,c,standard ensomixedpluscpmerge_vwndstarairstar100_feb.nc"
#    print "ncatted -a calendar,time,o,c,standard elninomixedpluscpvarmerge_vwndstarairstar100_feb.nc"
#    print "ncatted -a calendar,time,o,c,standard laninamixedpluscpvarmerge_vwndstarairstar100_feb.nc"
#
#    print "mv elnino.nc elninoonlymixedpluscpmerge_hgtstar_sellonlatbox0to360_mermean_jfm.nc"
#    print "mv elninovar.nc elninoonlymixedpluscpvarmerge_hgtstar_sellonlatbox0to360_mermean_jfm.nc"
#    print "mv lanina.nc laninaonlymixedpluscpmerge_hgtstar_sellonlatbox0to360_mermean_jfm.nc"
#    print "mv laninavar.nc laninaonlymixedpluscpvarmerge_hgtstar_sellonlatbox0to360_mermean_jfm.nc"
#     print "cdo -O mergetime elnino.nc lanina.nc elninolaninamixedpluscpmerge_events_sst_djf.nc"
#   else:
#    print "cdo -O mergetime rub*.nc elninolaninamixedpluscpmerge_events_prmsl_jfm_bt"+str(trial)+".nc"
#    print "cdo -O merge ensocomp.nc ensomixedpluscpmerge_prmslpronao_jfm.nc ensomixedpluscpmerge_prmslpronao_jfm_new.nc" ##
#    print "mv ensomixedpluscpmerge_prmslpronao_jfm_new.nc ensomixedpluscpmerge_prmslpronao_jfm.nc" ##
#
#    print "cdo -O merge elninovar.nc elninomixedpluscpvarmerge_prmslpronao_jfm.nc elninomixedpluscpvarmerge_prmslpronao_jfm_new.nc" ##
#    print "mv elninomixedpluscpvarmerge_prmslpronao_jfm_new.nc elninomixedpluscpvarmerge_prmslpronao_jfm.nc" ##
#
#    print "cdo -O merge laninavar.nc laninamixedpluscpvarmerge_prmslpronao_jfm.nc laninamixedpluscpvarmerge_prmslpronao_jfm_new.nc" ##
#    print "mv laninamixedpluscpvarmerge_prmslpronao_jfm_new.nc  laninamixedpluscpvarmerge_prmslpronao_jfm.nc" ##

#print "ncrcat -O -n "+str(trial)+",4,1 ensocomp_0001.nc  ensomerge_prmslpronao_2000bootstraps_allyears18702014_jfm_version2.nc" ##
#print "ncrcat -O -n "+str(trial)+",4,1 elninovar_0001.nc  elninomixedpluscpvarmerge_hgt200pronao_jfm.nc" ## 
#print "ncrcat -O -n "+str(trial)+",4,1 laninavar_0001.nc  laninamixedpluscpvarmerge_hgt200pronao_jfm.nc" ## 
#print "rm -f ensocomp_*.nc elninovar_*.nc laninavar_*.nc" ##

   
