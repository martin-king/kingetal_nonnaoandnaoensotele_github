% bootstrap el nino years and lanina years, 
% find the difference of the means in NAO index (PC1). Repeat.

clear all; close all; startup;

SD = 225829.0;

% original nao index (pc 1) for el nino
naoelnino=[-106480;
  -218315.6;
  350791.2;
  -173561.9;
  31058.1;
  -201014.5;
  -357676.8;
  36951.73;
  -167173;
  -371319.2;
  -245723.6;
  -337774.2;
  -341454.2;
  -521866.6;
  -217546.7;
  108365.8;
  46568.22;
  293759.7;
  285548.2;
  140413.6;
  -67588.12;
  166142.2;
  -469951.2]./SD;

% original nao index (pc 1) for la nina
naolanina=[-411133.4;
  -73163.28;
  21311.54;
  253831.8;
  -44491.3;
  97763.47;
  -45234.59;
  162369.6;
  -98056.91;
  248335.9;
  -208284.2;
  330978.4;
  131675.3;
  -115373.8;
  -73766.98;
  302152.7;
  128782.5;
  208770.3;
  108548;
  -54803.9;
  -420834.6;
  -148233.7;
  -6267.212;
  -49860.49;
  159512.6;
  273140.7;
  -253220.8;
  549272.9;
  194965;
  306434.1;
  213867.3;
  68353.96;
  258938.8]./SD ;

rng(1974);

inden = randi(23,23,20000); % 1 - 23 index, 23 timesteps, 20000 of them. 
indln = randi(33,33,20000); % 1 - 33 index, 33 timesteps, 20000 of them.

naoenboot = naoelnino(inden); naolnboot = naolanina(indln); 
naoboot = mean(naoenboot,1) - mean(naolnboot,1);

% plot probability histogram bootstrap nao indices
scrsz = get(0,'ScreenSize');
%[left, bottom, width, height]
figure('Position',[1 scrsz(4)/2 scrsz(3)/1.4 scrsz(4)/1.7]);
figure(1),clf
hm=histogram(naoboot,'BinWidth',0.05,'Normalization','probability','FaceColor',[218/255 165/255 32/255]); % plot prob. hist.
hold on;
axis([-1.8 0.4 0 0.1])
set(gca,'Xtick',[-1.8,-1.6,-1.4 -1.2 -1.0,-0.8,-0.6,-0.4,-0.2,0.,0.2,0.4]);
ax = gca;
ax.TickLength = [0.02, 0.02]; % Make tick marks longer.
ax.LineWidth = 3;
title('Prob. dist. of bootstrapped anom. NAO indices')

%then it is found:
%prctile(naoboot,2.5)

%ans =

%  -1.2655

%i=find(naoboot>=-1.2656 & naoboot<=-1.2654)

%i =

%       11178

% inden(:,11178), indln(:,11178): use these to find the original years

%-------
%prctile(naoboot,97.5)

%ans =

%  -0.1747

%i=find(naoboot>=-0.1748 & naoboot<=-0.1746)

%i =

%       15391
% inden(:,15391), indln(:,15391): use these to find the original years

plot([-1.2655 -1.2655],[0, 0.1],'-','Color',[0.6 0.6 0.6]);

plot([-0.1747 -0.1747],[0, 0.1],'-','Color',[0.6 0.6 0.6]);

hold off;
