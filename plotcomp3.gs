function plotcomp

*example (works also with nc files)
*'reinit'
*'sdfopen ensomerge_hgt200pronao_2000bootstraps_allyears18702014_jfm_timevariesyears_975pctl.nc'
*'sdfopen ensomixedpluscpmerge_hgt200pronao_jfm_timevariesyears.nc'
* OR 
*'sdfopen ensomerge_hgt200pronao_2000bootstraps_allyears18702014_jfm_timevariesyears_025pctl.nc'
*'sdfopen ensomixedpluscpmerge_hgt200pronao_jfm_timevariesyears.nc'
* OR use the 950pctl and 050pctl files


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
'/Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/scripts/polst.gs 20 n'
*'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'


'set rgb 58  45  30 165'
'set rgb 28 192   0   0'

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

factor=1.

'set gxout shaded'
'set rgb 16 170 170 170'
'set rbcols 16'
**'set cmin 0'
** shade where amplitude mean composite (file 2) is larger than amplitude of 2.5th and 97.5th percentile amplitudes.
* 97.5pctl 'd maskout(prmslout.1,prmslout.2(t=1)-prmslout.1(t=1))'
* 2.5pctl 
'd maskout(prmslout.1,-(prmslout.2(t=1)-prmslout.1(t=1)))'


'set gxout contour'
'set clab off'
*'set clskip 2'
'set cint 0.5'
'set cmax -0.1'
*'set ccolor 1'
'set ccolor 58'
'set cstyle 1'
'set cthick 6'
'd prmslout.1(t=1)/100.0'
*
*'set clskip 2'
'set cint 0.5'
'set cmin 0.1'
*'set ccolor 1'
'set ccolor 28'
'set cstyle 1'
'set cthick 6'
'd prmslout.1(t=1)/100.0'
*
'set clab on'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set cthick 10'
'd prmslout.1(t=1)/100.0'

*'basemap o 15 17 L'

*'gxprint ensocompboot_nd_'z'.png'

z=z+1

endwhile

return
