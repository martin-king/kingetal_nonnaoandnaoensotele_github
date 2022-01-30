function writetele

'reinit'

'sdfopen elninolaninamixedpluscpmerge_events_hgt200_jfm.nc'
*'sdfopen ensomixedpluscpmerge_hgt200ortnao_jfm.nc'
*
'sdfopen ensomixedpluscpmerge_hgt200pronao_jfm.nc'

*for ortnao 'set lon 0 360'
*for pronao 

'set lon -180 180'

tc=1
'set t 1'

while (tc<=56)

'set t 'tc

*for ortnao 'sc=scorr(prmsl.1,prmsl.2(t=1),lon=180,lon=360,lat=30,lat=80)'
*for pronao 
'sc=scorr(hgt.1,prmsl.2(t=1),lon=-60,lon=10,lat=30,lat=70)'

'd sc'
line=sublin(result,1)
val=subwrd(line,4)

cad=tc'	'val
*
rc=write('elninolaninamixedpluscp_events_hgt200_scorr_telepronao_jfm.txt',cad,append)


tc=tc+1

endwhile

return

       

