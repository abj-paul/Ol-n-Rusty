use borsh::BorshDeserialize;
use solana_program::program_error::ProgramError;

pub enum MovieInstruction {
    AddMovieReview {
        title: String,
        id: u8,
        description: String,
    },
}

impl MovieInstruction {
    pub fn unpack(input: &[u8]) 
        -> Result<Self, ProgramError> 
    {
        let (&variant, rest) = input.split_first().ok_or(PrigramError::InvalidInstructionData)?;
        let payload = MovieReviewPayload::try_from_reader(rest).unwrap();

        Ok(match variant {
            0 => Self::AddMovieReview { 
                    title: payload.title, 
                    id: payload.id, 
                    description: payload.description 
                },
            _ => return Err((ProgramError::InvalidInstructionData));
        })
    }
}

#[derive(BorshDeserialize)]
struct MovieReviewPayload {
    title: String,
    id: u8,
    description: String,
}

