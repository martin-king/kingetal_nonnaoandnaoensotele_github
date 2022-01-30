function plotcomp

*example (works also with nc files)
*JFM
*sdfopen ensomixedpluscpmerge_vstarairstar100ortnao_jfm.nc
*sdfopen elninomixedpluscpvarmerge_vstarairstar100ortnao_jfm.nc
*sdfopen laninamixedpluscpvarmerge_vstarairstar100ortnao_jfm.nc
* the climatology
*open vwndstarairstar100.1851_2014_jfmmean.ctl

*ND
*sdfopen ensomixedpluscpmerge_vstarairstar100ortnaojfm_nd.nc
*sdfopen elninomixedpluscpvarmerge_vstarairstar100ortnaojfm_novdecmean.nc
*sdfopen laninamixedpluscpvarmerge_vstarairstar100ortnaojfm_novdecmean.nc
*open vwndstarairstar100.1851_2014_ndmean.ctl

*Extreme El Nino
*sdfopen elninoextrememerge_vstarairstar100ortnao_jfm.nc
*sdfopen elninoextremevarmerge_vstarairstar100ortnao_jfm.nc
*open vwndstarairstar100.1851_2014_jfmmean.ctl

'reset'
'set vpage 0 11 0 6.5'
*'set lon -30 75'
*'set lat 25 75'
*'set xlopts 1 10 0.29'
*'set ylopts 1 10 0.29'

zmax=1
z=1

while (z<=zmax)

'clear'
'set z 'z
'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/scripts/polst.gs 40 n'
'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'


*blue 'set rgb 58  45  30 165'
*red 'set rgb 28 192   0   0'

'set display color white'
'set grads off'
'set ylint 20'
'set xlint 30'
*'set grid on 5 1'
'set grid off'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 7'
'set clopts -1 -1 0.16'

*factor=1.

*'tstat2d=abs(prmsl.1(t=1))/sqrt(prmsl.2(t=1)/23+prmsl.3(t=1)/33)'
'tstat2d=abs(prmsl.1(t=1))/sqrt(prmsl.2(t=1)/5)'
'set gxout shaded'
*'set rgb 16 190 190 190'
*'set rbcols 16'
*'set cmin 0.0'
*'d tstat2d-2.1'
*'set ccols  44 43 0 22 24 26 28'
*'set clevs  -0.4 -0.2 0.2 0.4 0.6 0.8'
*'d maskout(prmsl.1,tstat2d-2.45)'

'set ccols  95 94 93 92 91 0 81 82 83 84 85'
'set clevs  -8 -6 -4 -2 -0.2 0.2 2 4 6 8'
'd prmsl.1(t=1)'

'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 0.8 0 6.2 0.4'
* cbar.gs sf vert xmid ymid

'set gxout contour'
'set clab off'
*'set clskip 2'
*'set cint 2'
*'set cmax -0.1'
*'set ccolor 1'
*'set ccolor 54'
*'set cstyle 1'
*'set cthick 10'
*'d prmsl.1(t=1)/1.0'
*
*'set clskip 2'
*'set cint 2'
*'set cmin 0.1'
*'set ccolor 1'
*'set ccolor 85'
*'set cstyle 1'
*'set cthick 10'
*'d prmsl.1(t=1)/1.0'
*
*'set clab on'
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set cthick 10'
*'d prmsl.1(t=1)/100.0'

*
'set dfile 3'
'clim=ave(vwnd.3,t=1,t=164)'
'set cint 10'
'set cmax -0.1'
*'set ccolor 1'
'set ccolor 1'
'set cstyle 2'
'set cthick 6'
'd clim'
*
*'set clskip 2'
'set cint 10'
'set cmin 0.1'
*'set ccolor 1'
'set ccolor 1'
'set cstyle 1'
'set cthick 6'
'd clim'

*'basemap o 15 17 L'

*'gxprint ensocompboot_nd_'z'.png'

z=z+1

endwhile

return
