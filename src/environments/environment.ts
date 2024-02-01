export const environment = {    
  SECRET_KEY: '',
  endpoint: 'https://testsecureacceptance.cybersource.com/pay',
  accessKey: '',
  profileId: '',
  uuidSize: 16,
  signedFieldNames: 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,bill_to_address_line1,bill_to_address_city,bill_to_address_country,bill_to_email,bill_to_surname,bill_to_forename,override_custom_cancel_page,override_custom_receipt_page',
  transactionType: 'authorization',
  unsignedFieldNames: ''
};