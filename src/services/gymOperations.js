import { supabase } from './supabaseClient';
import { calculateExpiryDate } from '../utils/dateHelpers';

// Fetch all members for the logged-in gym admin
export const fetchMembers = async (userId) => {
  const { data, error } = await supabase
    .from('gym_members')
    .select('*')
    .eq('user_id', userId)
    .order('expiry_date', { ascending: true });

  if (error) {
    console.error("Error fetching members:", error);
    return [];
  }
  return data;
};

// Register a new member
export const addMember = async (userId, memberData) => {
  const expiryDate = calculateExpiryDate(memberData.planType);

  const { data, error } = await supabase
    .from('gym_members')
    .insert([{
      user_id: userId,
      full_name: memberData.fullName,
      phone: memberData.phone,
      plan_type: memberData.planType,
      payment_status: memberData.paymentStatus,
      expiry_date: expiryDate
    }]);

  if (error) {
    console.error("Error adding member:", error);
    return null;
  }
  return data;
};

// Log daily attendance
export const checkInMember = async (memberId) => {
  const { data, error } = await supabase
    .from('attendance')
    .insert([{ member_id: memberId }]);

  if (error) {
    console.error("Check-in failed:", error);
    return null;
  }
  return data;
};