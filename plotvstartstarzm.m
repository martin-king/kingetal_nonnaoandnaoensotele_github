clear all; close all; 

set(0,'defaultaxesfontsize',70,'defaultaxeslinewidth',0.7, ...
    'defaultlinelinewidth',2.0,'defaultpatchlinewidth',2.0)

% Used for plotting these:
% ensomixedpluscpmerge_vstarairstar100ortnaojfm_nd_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100ortnao_jfm_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100pronaojfm_nd_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100pronao_jfm_zonalmean.txt
%
% ensomixedpluscpmerge_vstarairstar100ortnao_extreme_jfm_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100pronao_extreme_jfm_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100ortnaojfm_extreme_nd_zonalmean.txt
% ensomixedpluscpmerge_vstarairstar100pronaojfm_extreme_nd_zonalmean.txt

zm = load('ensomixedpluscpmerge_vstarairstar100pronaojfm_extreme_nd_zonalmean.txt','-ascii');

scrsz = get(0,'ScreenSize');
%[left, bottom, width, height]
figure('Position',[1 scrsz(4)/2 scrsz(3)/3.2 scrsz(4)/1.1]);
figure(1),clf

plot(zm(:,2),zm(:,1),'k-','LineWidth',12);

%axis([-4 4 40 90])
%set(gca,'Xtick',[-4 -2 0 2 4]);

axis([-2 2 40 90])
set(gca,'Xtick',[-2 -1 0 1 2]);

set(gca,'Ytick',[50 70 90]);

set(gca,'YAxisLocation','right', 'XAxisLocation','top')

