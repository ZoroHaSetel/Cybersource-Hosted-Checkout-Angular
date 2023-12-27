export const environment = {    
    SECRET_KEY: 'YOUR SECRET HERE',
    endpoint: 'https://testsecureacceptance.cybersource.com/embedded/pay',
    accessKey: 'YOUR KEY HERE',
    profileId: 'YOUR PROFILE HERE',
    uuidSize: 16,
    signedFieldNames: 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
    transactionType: 'authorization',
    unsignedFieldNames: ''
};
