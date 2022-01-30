function writefortaylor

'reset'

tmax=2001
t=1
*this line is VERY IMPORTANT to define the area available
'set lon -180 180'
*north pac 'set lon 0 360'

'set t '1

'obscomp=prmsl'

*jfm 
'magobscomp=sqrt(atot(pow(prmsl,2),lon=-60,lon=10,lat=30,lat=70))'
*nd 'magobscomp=sqrt(atot(pow(prmsl,2),lon=-50,lon=10,lat=20,lat=60))'
*north pac. 'magobscomp=sqrt(atot(pow(prmsl,2),lon=150,lon=240,lat=30,lat=60))'
*arctic 'magobscomp=sqrt(atot(pow(prmsl,2),lon=-60,lon=0,lat=60,lat=90))'


while (t<=tmax)
   'set t 't
*djf 'cosalpha=scorr(prmsl,obscomp,lon=-60,lon=0,lat=30,lat=70)'
*jfm 
   'cosalpha=scorr(prmsl,obscomp,lon=-60,lon=10,lat=30,lat=70)'
*nd 'cosalpha=scorr(prmsl,obscomp,lon=-50,lon=10,lat=20,lat=60)'
*north pac. 'cosalpha=scorr(prmsl,obscomp,lon=150,lon=240,lat=30,lat=60)'
*arctic 'cosalpha=scorr(prmsl,obscomp,lon=-60,lon=0,lat=60,lat=90)'
*jf nonsym 'cosalpha=scorr(prmsl,obscomp,lon=-40,lon=20,lat=30,lat=75)'

*djf 'magcomp=sqrt(atot(pow(prmsl,2),lon=-60,lon=0,lat=30,lat=70))'
*jfm 
   'magcomp=sqrt(atot(pow(prmsl,2),lon=-60,lon=10,lat=30,lat=70))'
*nd 'magcomp=sqrt(atot(pow(prmsl,2),lon=-50,lon=10,lat=20,lat=60))'
*north pac. 'magcomp=sqrt(atot(pow(prmsl,2),lon=150,lon=240,lat=30,lat=60))'
*arctic 'magcomp=sqrt(atot(pow(prmsl,2),lon=-60,lon=0,lat=60,lat=90))'
*jf nonsym 'magcomp=sqrt(atot(pow(prmsl,2),lon=-40,lon=20,lat=30,lat=75))'
   'a=magcomp/magobscomp'

   'd cosalpha'
   line=sublin(result,1)
   val2=subwrd(line,4)

   'd a'
   line=sublin(result,1)
   val1=subwrd(line,4)

   cad=val1'       'val2
   rc=write('ensomixedpluscpmerge_prmslpronao_jfm_fortaylor.txt',cad,append)

   t=t+1
endwhile

return
 
  
 
