
const env = process.env;

const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
        host: "ec2-52-20-166-21.compute-1.amazonaws.com",
        port: '5432',
        user: 'dzaiqzeqdxueyk',
        password:  '0199af2a75b01edce80c6197f9a6b091cbd9cb9a9936e80363792e99de32dcb2',
        database: 'd84j23nek2avr0',
    },
    listPerPage:  10,
};

export default config;
