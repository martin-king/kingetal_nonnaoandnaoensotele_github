function plotcomp

*example 
* sdfopen ensomixedpluscpmerge_hgtstarortnao_sellonlatbox0to360_mermean_jfm.nc
* sdfopen elninomixedpluscpvarmerge_hgtstarortnao_sellonlatbox0to360_mermean_jfm.nc
* sdfopen laninamixedpluscpvarmerge_hgtstarortnao_sellonlatbox0to360_mermean_jfm.nc
* sdfopen hgtstar.mon.mean_janfebmarmean_selname_sellonlatbox0to360_mermean_timmean.nc

'reset'
'set vpage 0 11 0 6.0'
'set xlopts 1 10 0.29'
'set ylopts 1 10 0.29'

'set z 1 24'
'set yflip off'
'set ylevs 10 30 50 70 100 300 500 700 1000'
'set xlint 60'
'set zlog off'
*'/Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/scripts/polst.gs 20 n'
'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'


'set rgb 58  45  30 165'
'set rgb 28 192   0   0'
'set rgb 38  30 180  30'

'set display color white'
'set grads off'
*'set grid on 5 1'
'set grid off'
'set clopts -1 -1 0.12'

factor=1.

******* file 4 climatology
'set dfile 4'

'set z 1 24'
'set yflip off'
'set ylevs 10 30 50 70 100 300 500 700 1000'
'set xlint 60'
'set zlog off'

'set gxout shaded'
'set ccols  44 43 42 0 22 23 24'
'set clevs  -200 -100 -10 10 100 200'
'd hgt.4(t=1)'
'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 0.8 0 6. 0.24'
* cbar.gs sf vert xmid ymid

******* statistical sig.
'set dfile 1'
'set z 1 24'
'set yflip off'
'set ylevs 10 30 50 70 100 300 500 700 1000'
'set xlint 60'
'set zlog off'

'tstat2d=abs(hgt.1(t=1))/sqrt(hgt.2(t=1)/23+hgt.3(t=1)/33)'
*'tstat2d=abs(prmsl.1)/sqrt(prmsl.2/5)'
*'set gxout shaded'
*'set rgb 16 200 200 200'
*'set rbcols 16'
*'set cmin 0.0'

'set gxout shaded'
*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 16 16 4 0'
'set rgb 81 tile 1'
'set ccols -1 81'
'set clevs 0.0'

'd tstat2d-2.1'
*'set ccols  44 43 0 22 24 26 28'
*'set clevs  -0.4 -0.2 0.2 0.4 0.6 0.8'
*'d maskout(prmsl.1,tstat2d-2.45)'

******* file 1

'set gxout contour'
'set clab off'
*'set clskip 2'
'set cint 5'
'set cmax -0.1'
*'set ccolor 1'
'set ccolor 58'
'set cstyle 2'
'set cthick 9'
'd hgt.1(t=1)'
*
*'set clskip 2'
'set cint 5'
'set cmin 0.1'
*'set ccolor 1'
'set ccolor 28'
'set cstyle 1'
'set cthick 9'
'd hgt.1(t=1)'
*
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set cthick 10'
*'d prmsl.1(t=1)/100.0'

*'basemap o 15 17 L'

*'gxprint ensocompboot_nd_'z'.png'



return
