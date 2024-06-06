cd Documents
md TOM
cd TOM
dir
type nul> arquivo1.txt
cd..
md JOBIM
cd JOBIM
type nul> arquivo3.txt
ren arquivo3.txt arquivo2.txt
move JOBIM\arquivo2.txt TOM
dir
cd..
rd JOBIM
fc arquivo1.txt arquivo2.txt
del arquivo2.txt






