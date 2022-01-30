function startstarzm

ymax = 91
y = 66

'set x 1'
'set y 'y

while (y<=ymax)
 
 'set y 'y
 line = sublin(result,1)
 lat = subwrd(line,4)

 'd ave(prmsl,lon=0,lon=360)'
 line = sublin(result,2)
 zm = subwrd(line,4)

 cad=lat'       'zm
 rc=write('ensomixedpluscpmerge_vstarairstar100ortnaojfm_extreme_nd_zonalmean.txt',cad,append)

 y = y+1

endwhile

return
