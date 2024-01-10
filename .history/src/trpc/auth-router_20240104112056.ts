import { getPayloadClient } from '@/get-payload';
import { Procedure, procedure } from 'onekijs-framework';
import {  }

type TokenPayload = {
 token: string;
};

const verifyEmailProcedure: Procedure<TokenPayload> = procedure(async ({ token }) => {
 const payload = await getPayloadClient();

 const isVerified = await payload({
    collection: 'users',
    token,
 });

 return isVerified;
});

export default verifyEmailProcedure;