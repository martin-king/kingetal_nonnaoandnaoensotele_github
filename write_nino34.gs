function write_nino34

'reset'
* sdfopen HadISST_sst_djfmean_setrtoc_setmisstoc.nc
* or
* sdfopen HadISST_sst_ondmean_setrtoc_setmisstoc.nc

ts=1
te=148

'set t 1'
'sstave=ave(sst.1,t='ts',t='te')'

'set t 'ts' 'te
'sstanom=sst.1-sstave'

*nino3.4
'nino34=aave(sstanom,lon=190,lon=240,lat=-5,lat=5)'
*nino3 
'nino3=aave(sstanom,lon=215,lon=265,lat=-5,lat=5)'
*nino4 
'nino4=aave(sstanom,lon=160,lon=210,lat=-5,lat=5)'
*val0
'regiona=aave(sstanom,lon=165,lon=220,lat=-10,lat=10)'
*val1
'regionb=aave(sstanom,lon=250,lon=280,lat=-10,lat=10)'
*val2
'regionc=aave(sstanom,lon=125,lon=145,lat=-10,lat=10)'

'set t 1'
'nino34std=sqrt(ave(pow(nino34,2),t='ts',t='te'))'

t=1
tmax=te

while (t<=tmax)

 'set t 't
 'd nino34/nino34std'
  line=sublin(result,1)
  val=subwrd(line,4)
 'd regiona'
  line=sublin(result,1)
  val0=subwrd(line,4)
 'd regionb'
  line=sublin(result,1)
  val1=subwrd(line,4)
  'd regionc'
  line=sublin(result,1)
  val2=subwrd(line,4)
*  year=1920+t-1
  year=1870+t-1
*ep el if(val1>=0.6 & val1>val0)  
*cp el if(val0>=0.6 & val0>val1) 
*ep la if(val1<-0.6 & val1<val0)
*cp la 
if(val0<-0.6 & val0<val1)   
*  if(val<=-1.5) 
   cad=year'       'val0
*   cad=year
   rc=write('hadisst_rub.txt',cad,append)
 endif

 t=t+1

endwhile

return
