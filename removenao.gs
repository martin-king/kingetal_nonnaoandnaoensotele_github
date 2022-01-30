function removenao

*example of input files:
*the original slp data in JF mean anomalies from 1851-2014
*sdfopen prmsl.mon.mean_janfebmean_anom.nc
*1st PC time series (ie NAO) calculated using CDO
*sdfopen obase00000.nc

'reset'

'set t 1'
*I am only interested from 1870 onwards
'naomean=ave(prmsl.2,t=20,t=164)'
*calculate amplitude of NAO time series/PC1
'naoamp=sqrt(sum(pow(prmsl.2-naomean,2),t=20,t=164))'
'set t 20 164'
*calculate nao vector with unit amplitude
'naounit=(prmsl.2-naomean)/naoamp'
******* only used for vwndstarairstar files
'vtanom=vwnd.1-ave(vwnd.1,t=1,t=164)'

*dot product (similar to correlation with a unit time series)
*calculating first term 
'set t 20'
*note: this is one way I find I can multiply a number with a field in GRADS
'd naounit'
val=subwrd(result,5)
'prmslprnaoamp2d=vtanom*'val
* all the rest
t=21
tmax=164
while(t<=tmax)
 'set t 't
 'd naounit'
 val=subwrd(result,5)
 'prmslprnaoamp2d=prmslprnaoamp2d+(vtanom*'val')'
 t=t+1
endwhile

tmax=164
t=20
'set x 1 180'
'set y 1 91'
*writing to a file orthogonal to NAO part 'set fwrite -le hgt50ortnaojanfeb.mon.mean_novdecmean_anom_1870_2013.grd'
*'set fwrite -le vstarairstar100ortnao.mon.mean_janfebmarmean_anom_1870_2014.grd'
*writing to a file parallel to NAO part 'set fwrite -le hgt50pronaojanfeb.mon.mean_novdecmean_anom_1870_2013.grd'
'set fwrite -le vstarairstar100pronao.mon.mean_janfebmarmean_anom_1870_2014.grd'

while(t<=tmax)
 'set t 't
*note: just so to display a number, rather than writing out to the file/fwrite
 'set gxout contour'
 'd naounit'
 val=subwrd(result,5)
*note: writing to the file/fwrite timestep by timestep when going through while loop
 'set gxout fwrite'
*the parts orthogonal to NAO: 
*'d vtanom-prmslprnaoamp2d*'val
*the parts parallel to NAO: 
'd prmslprnaoamp2d*'val
*the total ie original: 'd prmsl.1'
 t=t+1
endwhile

'disable fwrite'

return