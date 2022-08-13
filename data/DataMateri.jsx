
export const bgColor = () =>{
    if (dbMateri.id % 2 == 1) {
        return("bg-cardColor");
    }else{
        return("bg-trmCard");
    }
}


export const dbMateri = [
    {
        id :1,
        Materi : 'Pengenalan KSL',
        tgl : '01 Sep 2022'
    },
    {
        id : 2,
        Materi : 'Instalasi Linux',
        tgl : '08 Sep 2022'
    },
    {
        id : 3,
        Materi : 'Terminologi Linux',
        tgl : '15 Sep 2022'
    },
    {
        id : 4,
        Materi : 'CLI',
        tgl : '22 Sep 2022'
    },
    {
        id : 5,
        Materi : 'File Permission & Ownership',
        tgl : '29 Sep 2022'
    },
    {
        id : 6,
        Materi : 'Superuser & root',
        tgl : '27 Oct 2022'
    },
    {
        id : 7,
        Materi : 'Cara install app',
        tgl : '03 Nov 2022'
    },
    {
        id : 8,
        Materi : 'Command Berbahaya',
        tgl : '10 Nov 2022'
    },
    {
        id : 9,
        Materi : 'Vim',
        tgl : '17 Nov 2022'
    },
    {
        id : 10,
        Materi : 'Open Source Software',
        tgl : '24 Nov 2022'
    },
    {
        id : 11,
        Materi : 'Git',
        tgl : '01 Dec 2022'
    },
    {
        id : 99,
        Materi : 'Ultah KSL',
        tgl : '22 Feb 2023'
    },
    {
        id : 88,
        Materi : 'Contoh Kalau Libur',
        tgl  : 'libur gess'
    },
    {
        id : 12,
        Materi : 'Subnetting',
        tgl : '23 Feb 2023'
    },
    {
        id : 13,
        Materi : 'Dasar Jaringan',
        tgl : '02 Mar 2023'
    },
    {
        id : 14,
        Materi : 'Capture The Flag',
        tgl : '09 Mar 2023'
    },
    {
        id : 15,
        Materi : 'Footprinting and Reconnaisance',
        tgl : '16 Mar 2022'
    },
    {
        id : 16,
        Materi : 'Penetration Testing',
        tgl : '23 Mar 2023'
    },
    {
        id : 17,
        Materi : 'Proxy and Brutesploit',
        tgl : '30 Mar 2023'
    },
    {
        id : 18,
        Materi : 'Ethical Hacking',
        tgl : '27 Apr 2023'
    },
    {
        id : 19,
        Materi : 'Networking and Security Foundation',
        tgl : '04 May 2023'
    },
    {
        id : 20,
        Materi : 'Scanning Networks',
        tgl : '11 May 2023'
    },
    {
        id : 21,
        Materi : 'Malware',
        tgl : '25 May 2023'
    },{
        id : 22,
        Materi : 'Pertemuan Terakhir',
        tgl : '08 Jun 2023'
    }
]